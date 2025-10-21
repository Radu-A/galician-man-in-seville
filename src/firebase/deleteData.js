import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import db from "./firebaseConfig";

/**
 * Deletes a photo document from Firestore by its custom "id" field.
 * @param {string} photoId - The custom ID stored in the document.
 * @returns {object} - Result object with status and message.
 */
export const deletePhoto = async (photoId) => {
  if (!photoId) {
    return { success: false, message: "Photo ID is required." };
  }

  try {
    // 1️⃣ Query Firestore for a document with the matching custom "id" field
    const photosRef = collection(db, "photos");
    const q = query(photosRef, where("id", "==", photoId));
    const snapshot = await getDocs(q);

    // 2️⃣ Handle empty result
    if (snapshot.empty) {
      console.warn(`⚠️ No document found with id = ${photoId}`);
      return {
        success: false,
        message: `No document found for id: ${photoId}`,
      };
    }

    // 3️⃣ Get document reference and delete it
    const photoRef = snapshot.docs[0].ref;
    await deleteDoc(photoRef);

    console.log(`✅ Photo deleted successfully: ${photoRef.path}`);
    return { success: true, message: `Photo deleted: ${photoRef.path}` };
  } catch (error) {
    console.error("❌ Error deleting photo:", error);
    return {
      success: false,
      message: error.message || "Error deleting photo.",
    };
  }
};
