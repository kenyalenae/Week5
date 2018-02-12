
//Javascript Objects

var cars = { honda: 'accord', toyota: 'tacoma'};

console.log(cars['honda']);

console.log(cars.honda);


// can you print the value for toyota?
console.log(cars['toyota']);
var toyotaModel = cars['toyota'];
console.log(cars.toyota);

// can you add another key:value pair and print it?
cars.audi = 'A8';
console.log(cars.audi);

//add another car to the object
cars['subaru'] = 'forrester';
console.log(cars.subaru);

// test if a car is in the cars object
if (cars.volkswagen) {
    console.log('Volkswagen is a key in the object')
}
else
    console.log('Volkswagen is not a key in the object'
    );

if (cars.audi) {
    console.log('Audi is a key in the object')
}

console.log('All the cars:');
for (var make in cars) {
    console.log(make, cars[make]); // this works
    console.log(make + ' ' + cars[make]); // this works
    console.log(make + ' ' + cars.make); // this doesn't work
}

//-------------------------------------------------------------------------//

// inventory for donut store
var donuts = {jelly:34, chocolate:20, sprinkles:100};
// add up all the donuts
var total = 0;
for (var type in donuts) {
    total = total + donuts[type];
}

console.log(total);

// Nested arrays and JSON objects

var github_data = [
    {
        "id": 117762996,
        "name": "hello-git",
        "full_name": "kenyalenae/hello-git",
        "owner": {
            "login": "kenyalenae",
            "id": 35243111,
            "avatar_url": "https://avatars1.githubusercontent.com/u/35243111?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/kenyalenae",
            "html_url": "https://github.com/kenyalenae",
            "followers_url": "https://api.github.com/users/kenyalenae/followers",
            "following_url": "https://api.github.com/users/kenyalenae/following{/other_user}",
            "gists_url": "https://api.github.com/users/kenyalenae/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/kenyalenae/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/kenyalenae/subscriptions",
            "organizations_url": "https://api.github.com/users/kenyalenae/orgs",
            "repos_url": "https://api.github.com/users/kenyalenae/repos",
            "events_url": "https://api.github.com/users/kenyalenae/events{/privacy}",
            "received_events_url": "https://api.github.com/users/kenyalenae/received_events",
            "type": "User",
            "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/kenyalenae/hello-git",
        "description": "Testing out Github",
        "fork": false,
        "url": "https://api.github.com/repos/kenyalenae/hello-git",
        "forks_url": "https://api.github.com/repos/kenyalenae/hello-git/forks",
        "keys_url": "https://api.github.com/repos/kenyalenae/hello-git/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/kenyalenae/hello-git/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/kenyalenae/hello-git/teams",
        "hooks_url": "https://api.github.com/repos/kenyalenae/hello-git/hooks",
        "issue_events_url": "https://api.github.com/repos/kenyalenae/hello-git/issues/events{/number}",
        "events_url": "https://api.github.com/repos/kenyalenae/hello-git/events",
        "assignees_url": "https://api.github.com/repos/kenyalenae/hello-git/assignees{/user}",
        "branches_url": "https://api.github.com/repos/kenyalenae/hello-git/branches{/branch}",
        "tags_url": "https://api.github.com/repos/kenyalenae/hello-git/tags",
        "blobs_url": "https://api.github.com/repos/kenyalenae/hello-git/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/kenyalenae/hello-git/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/kenyalenae/hello-git/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/kenyalenae/hello-git/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/kenyalenae/hello-git/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/kenyalenae/hello-git/languages",
        "stargazers_url": "https://api.github.com/repos/kenyalenae/hello-git/stargazers",
        "contributors_url": "https://api.github.com/repos/kenyalenae/hello-git/contributors",
        "subscribers_url": "https://api.github.com/repos/kenyalenae/hello-git/subscribers",
        "subscription_url": "https://api.github.com/repos/kenyalenae/hello-git/subscription",
        "commits_url": "https://api.github.com/repos/kenyalenae/hello-git/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/kenyalenae/hello-git/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/kenyalenae/hello-git/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/kenyalenae/hello-git/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/kenyalenae/hello-git/contents/{+path}",
        "compare_url": "https://api.github.com/repos/kenyalenae/hello-git/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/kenyalenae/hello-git/merges",
        "archive_url": "https://api.github.com/repos/kenyalenae/hello-git/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/kenyalenae/hello-git/downloads",
        "issues_url": "https://api.github.com/repos/kenyalenae/hello-git/issues{/number}",
        "pulls_url": "https://api.github.com/repos/kenyalenae/hello-git/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/kenyalenae/hello-git/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/kenyalenae/hello-git/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/kenyalenae/hello-git/labels{/name}",
        "releases_url": "https://api.github.com/repos/kenyalenae/hello-git/releases{/id}",
        "deployments_url": "https://api.github.com/repos/kenyalenae/hello-git/deployments",
        "created_at": "2018-01-17T00:59:27Z",
        "updated_at": "2018-01-17T00:59:45Z",
        "pushed_at": "2018-01-17T00:59:44Z",
        "git_url": "git://github.com/kenyalenae/hello-git.git",
        "ssh_url": "git@github.com:kenyalenae/hello-git.git",
        "clone_url": "https://github.com/kenyalenae/hello-git.git",
        "svn_url": "https://github.com/kenyalenae/hello-git",
        "homepage": null,
        "size": 1,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "HTML",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 120533506,
        "name": "Week3Lab",
        "full_name": "kenyalenae/Week3Lab",
        "owner": {
            "login": "kenyalenae",
            "id": 35243111,
            "avatar_url": "https://avatars1.githubusercontent.com/u/35243111?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/kenyalenae",
            "html_url": "https://github.com/kenyalenae",
            "followers_url": "https://api.github.com/users/kenyalenae/followers",
            "following_url": "https://api.github.com/users/kenyalenae/following{/other_user}",
            "gists_url": "https://api.github.com/users/kenyalenae/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/kenyalenae/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/kenyalenae/subscriptions",
            "organizations_url": "https://api.github.com/users/kenyalenae/orgs",
            "repos_url": "https://api.github.com/users/kenyalenae/repos",
            "events_url": "https://api.github.com/users/kenyalenae/events{/privacy}",
            "received_events_url": "https://api.github.com/users/kenyalenae/received_events",
            "type": "User",
            "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/kenyalenae/Week3Lab",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/kenyalenae/Week3Lab",
        "forks_url": "https://api.github.com/repos/kenyalenae/Week3Lab/forks",
        "keys_url": "https://api.github.com/repos/kenyalenae/Week3Lab/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/kenyalenae/Week3Lab/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/kenyalenae/Week3Lab/teams",
        "hooks_url": "https://api.github.com/repos/kenyalenae/Week3Lab/hooks",
        "issue_events_url": "https://api.github.com/repos/kenyalenae/Week3Lab/issues/events{/number}",
        "events_url": "https://api.github.com/repos/kenyalenae/Week3Lab/events",
        "assignees_url": "https://api.github.com/repos/kenyalenae/Week3Lab/assignees{/user}",
        "branches_url": "https://api.github.com/repos/kenyalenae/Week3Lab/branches{/branch}",
        "tags_url": "https://api.github.com/repos/kenyalenae/Week3Lab/tags",
        "blobs_url": "https://api.github.com/repos/kenyalenae/Week3Lab/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/kenyalenae/Week3Lab/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/kenyalenae/Week3Lab/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/kenyalenae/Week3Lab/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/kenyalenae/Week3Lab/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/kenyalenae/Week3Lab/languages",
        "stargazers_url": "https://api.github.com/repos/kenyalenae/Week3Lab/stargazers",
        "contributors_url": "https://api.github.com/repos/kenyalenae/Week3Lab/contributors",
        "subscribers_url": "https://api.github.com/repos/kenyalenae/Week3Lab/subscribers",
        "subscription_url": "https://api.github.com/repos/kenyalenae/Week3Lab/subscription",
        "commits_url": "https://api.github.com/repos/kenyalenae/Week3Lab/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/kenyalenae/Week3Lab/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/kenyalenae/Week3Lab/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/kenyalenae/Week3Lab/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/kenyalenae/Week3Lab/contents/{+path}",
        "compare_url": "https://api.github.com/repos/kenyalenae/Week3Lab/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/kenyalenae/Week3Lab/merges",
        "archive_url": "https://api.github.com/repos/kenyalenae/Week3Lab/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/kenyalenae/Week3Lab/downloads",
        "issues_url": "https://api.github.com/repos/kenyalenae/Week3Lab/issues{/number}",
        "pulls_url": "https://api.github.com/repos/kenyalenae/Week3Lab/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/kenyalenae/Week3Lab/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/kenyalenae/Week3Lab/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/kenyalenae/Week3Lab/labels{/name}",
        "releases_url": "https://api.github.com/repos/kenyalenae/Week3Lab/releases{/id}",
        "deployments_url": "https://api.github.com/repos/kenyalenae/Week3Lab/deployments",
        "created_at": "2018-02-06T22:55:12Z",
        "updated_at": "2018-02-06T22:55:32Z",
        "pushed_at": "2018-02-06T22:55:31Z",
        "git_url": "git://github.com/kenyalenae/Week3Lab.git",
        "ssh_url": "git@github.com:kenyalenae/Week3Lab.git",
        "clone_url": "https://github.com/kenyalenae/Week3Lab.git",
        "svn_url": "https://github.com/kenyalenae/Week3Lab",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "HTML",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    }
]

// count the number of repositories?
var how_many_repos = github_data.length;
console.log(how_many_repos);

// can you loop over the array of objects and print each repository name?
for (var r = 0 ; r < github_data.length; r++) {
    var one_repo_data_object = (github_data[r]);
    console.log(one_repo_data_object.name);
}

// sum the total size of all your repos
var totalsize = 0
for (var r = 0 ; r < github_data.length; r++) {
    var one_repo_data_object = github_data[r];
    totalsize += one_repo_data_object.size;
}

// which repo is the largest?
var largestsize = 0;
var largestname;
for (var r = 0 ; r < github_data.length; r++) {
    var one_repo_data_object = github_data[r];
    if (largestsize < one_repo_data_object.size) {
        largestname = one_repo_data_object.name;
        largestsize = one_repo_data_object.size;
    }
}
console.log('largest repo is ' + largestname + ' at ' + largestsize)

// challenge: build another object of languages and counts for all of your repos







