import { useState } from "react";
import BaseCard from "../../../shared/components/cards/BaseCard";
import { toast } from "react-toastify";

const CreateRecognition = () => {
  const [form, setForm] = useState({
    employee: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.employee || !form.message) return;

    toast.success("Recognition submitted");

    setForm({
      employee: "",
      message: "",
    });
  };

  return (
    <BaseCard>
      <h2 className=" text-xl font-semibold mb-5 ">Recognize Someone</h2>

      <div className="space-y-4">
        <input
          placeholder="Employee Name"
          value={form.employee}
          onChange={(e) =>
            setForm({
              ...form,
              employee: e.target.value,
            })
          }
          className=" w-full border rounded-xl px-4 py-3 "
        />

        <textarea
          rows={4}
          placeholder="Write appreciation..."
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className=" w-full border rounded-xl px-4 py-3 "
        />

        <button
          onClick={handleSubmit}
          className=" px-5 py-3 bg-indigo-600 text-white rounded-xl "
        >
          Submit Recognition
        </button>
      </div>
    </BaseCard>
  );
};

export default CreateRecognition;
