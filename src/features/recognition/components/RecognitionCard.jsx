import BaseCard from "../../../shared/components/cards/BaseCard";

const RecognitionCard = ({ recognition }) => {
  return (
    <BaseCard>
      <div className="flex items-start gap-4">
        <img
          src={recognition.employeeAvatar}
          alt={recognition.employee}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">
            {recognition.employee}
          </h3>

          <p className="text-sm text-slate-500">
            Recognized by {recognition.recognizedBy}
          </p>

          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
            {recognition.badge}
          </span>

          <p className="mt-3 text-slate-600">
            {recognition.message}
          </p>

          <div className="flex gap-5 mt-4 text-sm text-slate-500">
            <span>👍 {recognition.likes}</span>
            <span>🎉 {recognition.celebrations}</span>
            <span>💬 {recognition.comments}</span>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default RecognitionCard;