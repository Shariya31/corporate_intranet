import { useState } from "react";
import KnowledgeHero from "../components/KnowledgeHero";
import KnowledgeStats from "../components/KnowledgeStats";
import KnowledgeSearch from "../components/KnowledgeSearch";
import KnowledgeCategories from "../components/KnowledgeCategories";
import KnowledgeLibrary from "../components/KnowledgeLibrary";
import PopularResources from "../components/PopularResources";
import {knowledgeData} from "../../../shared/mock-data/knowledgeData"
import RecentlyViewed from "../components/RecentlyViewed";
import useKnowledge from "../hooks/useKnowledge";
const KnowledgePage = () => {
    useKnowledge()
    const [search, setSearch] = useState("");

    const [activeCategory, setActiveCategory] = useState("All");
    const resources = knowledgeData.resources;
    const categories = knowledgeData.categories

    const filteredResources =
        resources.filter(
            (resource) => {

                const matchesSearch =
                    resource.title
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                const matchesCategory =
                    activeCategory === "All"
                        ? true
                        : resource.category === activeCategory;

                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    return (
        <div className="space-y-6">

            <KnowledgeHero />

            <KnowledgeStats />

            <KnowledgeSearch
                search={search}
                setSearch={setSearch}
            />

            <KnowledgeCategories
                categories={categories}
                activeCategory={
                    activeCategory
                }
                setActiveCategory={
                    setActiveCategory
                }
            />

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-8">

                    <KnowledgeLibrary
                        resources={
                            filteredResources
                        }
                    />

                </div>

                <div className="col-span-4 space-y-6">

                    <PopularResources />

                    <RecentlyViewed />

                </div>

            </div>

        </div>
    );
};

export default KnowledgePage;