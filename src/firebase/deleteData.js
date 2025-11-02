import { doc, collection, deleteDoc } from "firebase/firestore";
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
    const photoDocRef = doc(photosRef, photoId);
    await deleteDoc(photoDocRef);

    console.log(`✅ Photo deleted successfully: ${photoDocRef.path}`);
    return { success: true, message: `Photo deleted: ${photoDocRef.path}` };
  } catch (error) {
    console.error("❌ Error deleting photo:", error);
    return {
      success: false,
      message: error.message || "Error deleting photo.",
    };
  }
};
