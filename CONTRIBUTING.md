# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Contributing to Question

Thank you for your interest in contributing to our open-source project! Before you start, please take a moment to read and follow our forking and branch naming conventions to ensure smooth collaboration.
### Forking Conventions

1. Fork Repository Name:
When you fork the repository, please maintain the original repository's name:
   - Original Repository: `ComputerSocietyVITC/Question`  
   - Forked Repository: `your-username/Question`

2. Forking Workflow:
   - Fork the original repository to your GitHub account.
   - Clone your forked repository to your local development environment.
   - Configure the upstream repository to keep your fork up to date:  
      ```bash
      git remote add upstream https://github.com/ComputerSocietyVITC/Question.git
      ```
3. Pulling from Upstream:

    - Regularly update your forked repository with changes from the upstream repository:
      ```bash
        git fetch upstream
        git checkout main
        git merge upstream/main
        git push origin main
      ```
### Branch Naming Conventions

#### Branch Types:
- Use the following branch types:
   - `feature/`: For new features or enhancements.
   - `bugfix/`: For bug fixes.
   - `hotfix/`: For critical fixes that need immediate attention.
   - `chore/`: For routine tasks, maintenance, or tooling changes.
   - `doc/`: For documentation updates.
   - `refactor/`: For code refactoring.
   - `test/`: For adding or modifying tests.

- Branch Name Format:
   - Follow this format for branch names:
      - Use lowercase letters and hyphens.
      - Start with the branch type followed by a brief, descriptive name.
      - Include the issue number if applicable.  
            Examples:
                feature/add-new-feature
                bugfix/fix-issue-123
                doc/update-readme

- Example Workflow:
   - Create a new branch for your work based on the main branch:
      ```bash
         git checkout main
         git pull upstream main
         git checkout -b feature/my-new-feature
      ```
### Pull Request Naming:
- When creating a pull request, use a clear and descriptive title.
- Reference any related issues or feature requests in the pull request description using keywords like "Fixes #123" or "Closes #456."

By adhering to these forking and branch naming conventions, you help maintain a well-organized and collaborative development environment for our open-source project. We appreciate your contributions!

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.
