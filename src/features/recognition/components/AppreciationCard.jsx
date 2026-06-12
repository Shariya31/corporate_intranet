import { FiHeart, FiMessageCircle } from "react-icons/fi";

const AppreciationCard = ({ recognition }) => {
  return (
    <div className=" bg-white rounded-3xl border p-5 ">
      <div className=" flex gap-4 ">
        <img
          src={recognition.employeeAvatar}
          alt=""
          className=" h-14 w-14 rounded-full "
        />

        <div>
          <h3 className=" font-semibold ">{recognition.employee}</h3>

          <p className=" text-sm text-slate-500 ">
            Recognized by {recognition.recognizedBy}
          </p>
        </div>
      </div>

      <div className=" mt-4 inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm ">
        {recognition.badge}
      </div>

      <p
        className=" mt-4 text-slate-600
"
      >
        {recognition.message}
      </p>

      <div className=" flex gap-5 mt-5 ">
        <div className=" flex items-center gap-2 ">
          <FiHeart />
          {recognition.likes}
        </div>

        <div className=" flex items-center gap-2 ">
          🎉
          {recognition.celebrations}
        </div>

        <div className=" flex items-center gap-2 ">
          <FiMessageCircle />
          {recognition.comments}
        </div>
      </div>
    </div>
  );
};

export default AppreciationCard;
