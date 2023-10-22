export function getIdQuery(user) {
    const idQuery = {
        query: `
            query {
                user(login: "${user}"){
                    id
                }
                
            }`
        };
    return idQuery;
}

export function getMainQuery(user,id) {
    const mainQuery = {
        query:`
            query {
                user(login: "${user}") {
                id
                name
                pronouns
                url
                location
                company
                bio
                createdAt
                avatarUrl
                followers {
                    totalCount
                }
                following {
                    totalCount
                }
                pullRequests{
                    totalCount
                }
                issues {
                    totalCount
                }
                repositories(ownerAffiliations:OWNER, first: 3, orderBy: {field: CREATED_AT, direction: DESC}) {
                    nodes {
                    name
                    createdAt
                    defaultBranchRef {
                        name
                        target {
                        ... on Commit {
                            history(first: 3, author: {id: "${id}"}) {
                            nodes{
                                ... on Commit {
                                message
                                committedDate
                                }
                            }
                            }
                        }
                        }
                    }
                    }
                }
                contributionsCollection{
                    totalCommitContributions
                    contributionCalendar{
                    totalContributions
                    weeks{
                        contributionDays{
                            color
                            contributionCount
                            }
                        }
                    }
                }
                }
            }`
            };
    return mainQuery;
}

export function getHeader(){
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    };
    return headers;
}

export function getUrl(){
    const url = 'https://api.github.com/graphql';
    return url;
}
