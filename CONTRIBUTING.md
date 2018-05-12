# Contributing Guidelines

Some basic conventions for contributing to this project.

### General

Please make sure that there aren't existing pull requests attempting to address the issue mentioned. Likewise, please check for issues related to update, as someone else may be working on the issue in a branch or fork.

* Please open a discussion in a new issue / existing issue to talk about the changes you'd like to bring
* Develop in a new topic branch, not master or develop

When creating a new branch, prefix it with the *type* of the change (see section **Commit Message Format** below), the associated opened issue number, a dash and some text describing the issue (using dash as a separator).

For example, if you work on a bugfix for the issue #361, you could name the branch `fix361-template-selection`.

### Issues open to contribution

Want to contribute but don't know where to start?

Some of the open issues are labeled with prefix `exp/`, this is used to mark them as available for contributors to work on. All of these have an attributed difficulty level:

* **beginner**: a task that should be accessible with users not familiar with the codebase
* **intermediate**: a task that require some understanding of the project codebase or some experience in
either AngularJS or Golang
* **advanced**: a task that require a deep understanding of the project codebase

You can have a use Github filters to list these issues:

* beginner labeled issues: https://github.com/portainer/portainer/labels/exp%2Fbeginner
* intermediate labeled issues: https://github.com/portainer/portainer/labels/exp%2Fintermediate
* advanced labeled issues: https://github.com/portainer/portainer/labels/exp%2Fadvanced


### Commit Message Format

Each commit message should include a **name** and a **subject**:

```
 jay: <subject>
```

Lines should not exceed 100 characters. This allows the message to be easier to read on github as well as in various git tools and produces a nice, neat commit log ie:

```
 #271 jay: add exposed ports in the containers view
 #270 matt: fix a display issue in the templates view
 #269 matt: update dashboard with new layout
```

#### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

#### Labels

Use one of the following labels on GitHub issues or PRs to specify what type of changes you're making. Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation


### Other Information

* You can't push to `master` unless you're a repository admin. All code changes will go through GitHub PRs.
* When you've worked on a feature, and think it's ready to be put into the main codebase, create a GitHub pull request for your branch into `master`.
* If you started work on your feature a while back, it may have gotten far behind the HEAD of `master`. If this happens, use `git pull --rebase` to do a rebased pull so that your work doesn't create a bunch of unnecessary merges.
