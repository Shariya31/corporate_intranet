import RecognitionHero from '../components/RecognitionHero'
import AppreciationWall from '../components/AppreciationWall'
import CreateRecognition from '../components/CreateRecognition'
import useRecognition from '../hooks/useRecognition'
import RecognitionLeaderboard from '../components/RecognitionLeaderboard'
import HallOfFame from '../components/HallOfFame'
import CelebrationFeed from '../components/CelebrationFeed'
import EmployeeStories from '../components/EmployeeStories'
import AchievementSpotlight from '../components/AchievementSpotlight'

const RecognitionPage = () => {
    useRecognition()
    return (
        <div className="space-y-6">

            <RecognitionHero />

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-8">
                    <AppreciationWall />
                </div>

                <div className="col-span-4">
                    <CreateRecognition />
                </div>

            </div>

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-6">
                    <AchievementSpotlight />
                </div>

                <div className="col-span-6">
                    <EmployeeStories />
                </div>

            </div>

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-6">
                    <CelebrationFeed />
                </div>

                <div className="col-span-6">
                    <HallOfFame />
                </div>

            </div>

            <RecognitionLeaderboard />

        </div>
    )
}

export default RecognitionPage
