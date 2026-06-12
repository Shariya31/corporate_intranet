import ExecutiveSpotlight from '../components/ExecutiveSpotlight'
import LeadershipOutcomes from '../components/LeadershipOutcomes'
import StrategicPriorities from '../components/StrategicPriorities'
import QuarterlyRoadmap from '../components/QuarterlyRoadmap'
import AskLeadership from '../components/AskLeadership'
import LeadershipInsights from '../components/LeadershipInsights'
import useLeadership from '../hooks/useLeadership'
import LeadershipMessages from '../components/LeadershipMessages'

const LeadershipPage = () => {
    useLeadership()
    return (
        <div className="space-y-6">

            <ExecutiveSpotlight />
            <LeadershipMessages />
            <section className="grid grid-cols-12 gap-6">

                <div className="col-span-8">
                    <LeadershipOutcomes />
                </div>

                <div className="col-span-4">
                    <StrategicPriorities />
                </div>

            </section>

            <section className="grid grid-cols-12 gap-6">

                <div className="col-span-6">
                    <QuarterlyRoadmap />
                </div>

                <div className="col-span-6">
                    <AskLeadership />
                </div>

            </section>

            <LeadershipInsights />

        </div>
    )
}

export default LeadershipPage
