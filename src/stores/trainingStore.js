import { atom, map } from 'nanostores';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";
import { auth, db } from '../lib/firebase';

// --- STORES ---
export const user = atom(null);
export const isLoadingAuth = atom(true);
export const trackingData = map({}); // Formato: { "YYY-MM-DD": [ { activity... } ] }

// --- AUTH OBSERVER ---
onAuthStateChanged(auth, async (currentUser) => {
    isLoadingAuth.set(true);
    if (currentUser) {
        user.set(currentUser);
        await loadFromFirestore(currentUser.uid);
    } else {
        user.set(null);
        trackingData.set({});
    }
    isLoadingAuth.set(false);
});

// --- ACTIONS ---

export const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Login fail:", error);
        throw error;
    }
};

export const registerUser = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Firestore init will happen in observer if needed, or we can init here
    } catch (error) {
        console.error("Register fail:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    await signOut(auth);
};

// --- DATA PERSISTENCE ---

export const loadFromFirestore = async (uid) => {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            // Asegurar integridad de "trackingData"
            if (data.trackingData) {
                trackingData.set(data.trackingData);
            }
            console.log("Data loaded from Cloud ☁️");
        }
    } catch (e) {
        console.error("Error loading data:", e);
    }
};

const saveToFirestore = async () => {
    const u = user.get();
    if (!u) return;

    const dataToSave = {
        trackingData: trackingData.get(),
        lastUpdated: Date.now()
    };

    try {
        await setDoc(doc(db, "users", u.uid), dataToSave, { merge: true });
        console.log("Data saved to Cloud ☁️");
    } catch (e) {
        console.error("Error saving data:", e);
    }
};

// --- CRUD ACTIVITIES ---

export const addActivity = (dateId, activityObj) => {
    const current = trackingData.get();
    const dayEntries = current[dateId] || [];

    // Add new entry
    const newEntries = [...dayEntries, activityObj];

    // Update store
    trackingData.setKey(dateId, newEntries);

    // Sync
    saveToFirestore();
};

export const updateActivity = (dateId, index, updatedObj) => {
    const current = trackingData.get();
    const dayEntries = [...(current[dateId] || [])];

    if (index >= 0 && index < dayEntries.length) {
        dayEntries[index] = updatedObj;
        trackingData.setKey(dateId, dayEntries);
        saveToFirestore();
    }
};

export const deleteActivity = (dateId, index) => {
    const current = trackingData.get();
    let dayEntries = [...(current[dateId] || [])];

    if (index >= 0 && index < dayEntries.length) {
        dayEntries.splice(index, 1);

        if (dayEntries.length === 0) {
            // Si no quedan actividades, podemos borrar la key o dejarla vacía.
            // Nanostores map setKey a undefined no borra la key del obj subyacente del todo a veces en Maps, 
            // pero para Firestore está bien guardar array vacío.
            trackingData.setKey(dateId, []);
        } else {
            trackingData.setKey(dateId, dayEntries);
        }

        saveToFirestore();
    }
};
