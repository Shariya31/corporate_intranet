import { useState } from "react";
import BaseCard from "../../../shared/components/cards/BaseCard";
import { toast } from "react-toastify";

const CreateDiscussion = () => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !content) return;

    toast.success("Discussion created");

    setTitle("");
    setContent("");
  };

  return (
    <BaseCard>
      <h2
        className="
text-xl
font-semibold
mb-5
"
      >
        Start Discussion
      </h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Discussion title"
        className="
w-full
border
rounded-xl
px-4
py-3
mb-4
"
      />

      <textarea
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write discussion..."
        className="
w-full
border
rounded-xl
px-4
py-3
"
      />

      <button
        onClick={handleSubmit}
        className="
mt-4
px-5
py-3
bg-indigo-600
text-white
rounded-xl
"
      >
        Post Discussion
      </button>
    </BaseCard>
  );
};

export default CreateDiscussion;
