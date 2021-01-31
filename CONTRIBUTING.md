# CONTRIBUTING GUIDELINE

## Description

Your contribution consists of three parts.

1. In **week** 4 you will attend the planning session in which we will
select a project lead for the quarter. During this session you commit to implementing one feature of the class project.
2. Second, in **week 7** you will submit your implementation for code review.
Next, in week 8 you will submit your code review of another student’s implementation.
3. Finally, in **week 10** you will submit your final code, after review, and your response to your code review. All code that passes review will be added to the project.
4. It is **not necessary** for your code to be merged to receive extra credits. However, it might be the case when you submit a very low quality code.
5. You can work individually or as a group on implementing an assigned feature. However, it is recommended to contribute as a group.

## Branch naming convention

Please naming your branch using the following rule:

- your-name/your-task
- your-group-name/your-task

Example: hungvu/contributing-guideline

## Task assinging and pull request

1. In **week 7**, you will make a pull request to submit your code.
2. Tasks will be divided into issues and put into project board. A story board will clearly indicate the task for each person and/or group. It is located in **Projects** tab.
3. All pull requests must pass an automated test run by Github action. As of now, it simply checks whether your code is compilable or not. There can be more tests added later on.

## Submitting pull request

1. You will not directly push the changes to a master branch. Master branch is protected.
2. Your code will stay on your own branch. You might create an upstream branch. Each branch is only accessible by contributors of that one. You can also work on a forked repository, but as discusssed in an introduction meeting, working on a separate branch is preferred.
3. At **week 7**, you will make a pull request and your code will be reviewed by Hung Vu (@hunghvu), Benjamin (@BenjaminDeJager), and professor Chris (@algorithm0r).
4. For the pull requests, please document what you changed, updated, what portion of an assigned task has been completed, not completed and any potential or discovered bugs which haven't been fixed.
5. For the pull requests, please link you pull request with an assigned issue. For more information, please visit [this site](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).
6. For each pull request, please add a label **PR: NEED REVIEW** so the reviewer know it is a submission. The reviewer will then update labels with the followings.

   - **PR: REVIEWED**: This pull request is reviewed, but the decision has not been made. This tag will always stay on the pull request.
   - The labels below are more like secondary one, which indicates the review progress.
        - **PR: HAS CONFLICT**: This pull request has merge conflict that needs to be resolved. It does not indicate whether the PR can be merged or not.
        - **PR: DO NOT MERGE**: This pull request will not be merged. This is the final result.
        - **PR: READY TO MERGE**: This pull request passes all the tests, merge conflict are resolved and will be merged. This is a final result.
