import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getPhotos } from "../firebase/getData";
import PhotoBoard from "../components/PhotoBoard";
import Modal from "../components/Modal";
import PhotoForm from "../components/PhotoForm";

export default function PostView() {
  // --- 1. ALL HOOKS MUST BE CALLED FIRST AND UNCONDITIONALLY ---

  // Get post data passed via react-router location state.
  const { state: post } = useLocation();

  // State to hold the photos fetched from Firestore.
  const [photos, setPhotos] = useState(null);

  // State to control the visibility of the upload modal.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to fetch photos for the current post. Memoized to optimize useEffect dependency.
  const fetchPhotos = useCallback(async () => {
    // Return early if the post ID is unavailable.
    if (!post?.id) return;

    try {
      const res = await getPhotos(post.id);
      setPhotos(res);
    } catch (error) {
      console.error("Error fetching photos:", error);
      // Implement robust error handling here.
    }
  }, [post?.id]); // Dependency on the post ID to refetch only when the post context changes.

  // Initial data load: runs on mount and when fetchPhotos changes (due to post.id change).
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // --- 2. CONDITIONAL RENDERING (EARLY EXIT) ---

  // Safety check: Exit early if essential post data is missing.
  if (!post || !post.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">Error: Post data not found.</h1>
      </div>
    );
  }

  // --- 3. HANDLERS AND LOGIC ---

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Callback executed by PhotoForm upon successful upload.
  const handlePhotoUpload = () => {
    // 1. Close the modal window to remove the form.
    closeModal();
    // 2. Refresh the photo list by calling the fetch function.
    fetchPhotos();
  };

  // --- 4. FINAL RENDER ---

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-6 sm:pt-12 lg:px-8">
        <div className="grid grid-cols-[1fr_auto] gap-5">
          <div className="col-1 mx-auto max-w-2xl lg:mx-0">
            <h4 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
              {post.title}
            </h4>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="col-2 flex justify-end items-end">
            {/* Button to open the photo upload modal */}
            <button
              onClick={toggleModal}
              className="size-18 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-600 hover:shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <img src="icons/add-555.svg" alt="Add photo" />
            </button>
          </div>
        </div>
        {/* Pass the fetched photos to the board component */}
        <PhotoBoard photos={photos} />
      </section>

      {/* Modal Container */}
      <Modal open={isModalOpen} onClose={closeModal}>
        {/* Pass the upload callback and the close function to the form component */}
        <PhotoForm onPhotoUploaded={handlePhotoUpload} post={post} />
      </Modal>
    </>
  );
}
