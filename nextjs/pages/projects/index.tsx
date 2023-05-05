import {gql, useQuery} from '@apollo/client';
import ProjectItemCard from "../components/Project/ProjectItemCard";
import {Project} from "../../types/resolvers";
import {Stack} from "@mui/joy";
import {SearchForm} from "../components/SearchForm/Index";
import ProjectItemCardSkeleton from "../components/Project/ProjectItemCardSkeleton";

const GET_PROJECTS = gql`
    query Project($query: String, $filter: filterOptionsInput) {
        Projects(query: $query, filter: $filter) {
            _id
            title
            description
            price
            skills
            created_at
            projectScope {
                estimated_duration_in_days
                level_of_expertise
                size_of_project
            }
            category
            reactions {
                freelancer_id
                reaction_type
            }
        }
    }
`


export default function DisplayLocations() {
    // the types are not specific to check the query if you have any problem
    const {loading, error, refetch, data} = useQuery<{ Projects: Project[] }>(GET_PROJECTS);

    if (loading) return <Stack spacing={4}>
        <SearchForm onRefetch={refetch}/>
        <Stack spacing={2}>
            {
                [0, 1, 2, 4].map((_, i) => <ProjectItemCardSkeleton key={i}/>)
            }
        </Stack>
    </Stack>


    if (error) return <p>Error : {error.message}</p>;
    if (!data) return <p>No projects</p>


    return <Stack spacing={4}>
        <SearchForm onRefetch={refetch}/>
        <Stack spacing={2}>{data.Projects.map((project) => <ProjectItemCard key={project._id.toString()}
                                                                            project={project}/>)}</Stack>
    </Stack>
}