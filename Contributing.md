# Contributing to this repository

### Basic rules:
-	No directly pushing to master branch
-	No directly pushing to any other branch you did not create
-	Ensure everyone involved in a pull request approves of the pull request before merging
-	Follow branch naming rules below when creating a branch

### Branch naming rules:
-	All branches must end in either `-dev` or `-testdev`
-	`*-dev` are branched off from `master` and `*-testdev` are branched off from `*-dev`
-	`*-dev` branches must have clean commit messages with meaningful comments.
-	`*-testdev` branches can have rough prototypes with quick iterations. They must have the same prefix as their corresponding `*-dev` branch.
-	One `*-dev` can only have 1 corresponding `*-testdev` branch at all times.
-	Each `*-dev` and `*-testdev` is managed by 1 person

### Branch merging rules:
-	Merging into master requires at least 2 approvals
-	Merging into `*-dev` branches requires 1 approval
-	Merging into `*-testdev` branches can be directly done.
-	Before merging a `*-testdev` branch into a `*-dev` branch, squash commits and give them meaningful messages
