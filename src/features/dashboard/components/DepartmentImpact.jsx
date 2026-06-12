import { useSelector }
  from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";


const DepartmentImpact =
  () => {
    const departments =
      useSelector(
        (state) =>
          state.dashboard
            .data
            ?.departments ||
          []
      );

    return (
      <BaseCard>
        <h2
          className="
          text-lg
          font-semibold
          mb-5
        "
        >
          Department Impact
        </h2>

        <div className="space-y-4">
          {departments.map(
            (department) => (
              <div
                key={
                  department.name
                }
                className="
                border
                rounded-2xl
                p-4
              "
              >
                <div
                  className="
                  flex
                  justify-between
                "
                >
                  <h4
                    className="
                    font-medium
                  "
                  >
                    {
                      department.name
                    }
                  </h4>

                  <span
                    className="
                    text-green-600
                  "
                  >
                    {
                      department.growth
                    }
                  </span>
                </div>

                <p
                  className="
                  mt-2
                  text-slate-500
                "
                >
                  {
                    department.impact
                  }
                </p>
              </div>
            )
          )}
        </div>
      </BaseCard>
    );
  };

export default
  DepartmentImpact;