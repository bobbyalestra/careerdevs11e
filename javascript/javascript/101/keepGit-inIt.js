my code
// Learning the basics of GIT


// make sure you are in the directory that you want to start your repo in.


// git init (creates an empty repo)


// code README.md
//      add some info to your README.md file and SAVE IT

// git add -A
// git commit -m "first commit"

// go to github create the new directory 

// enter repo name
// DO NOT INITIATE A NEW README.md

// MAKE SURE YOU SELECT THE SSH TAB AND NOT THE HTTPS


// NOW you want to add existing repo to GitHub
// GO TO GITHUB.COM  THEN CLICK THE PLUS SIGN OR THE NEW REPOSITORY button


// select the first like of code
//      insert into VS Code
// select the second line of code
//      insert into VS Code

// NOW YOU SET UP BOTH REPO LOCATIONS and the remote ssh (GitHub)

//  back in current directory on VS Code

//  MAKE SURE YOU ADD A NEW WORKABLE BRANCH THAT ISNT MASTER
//  type the following to make a new branch

// git checkout -b "branchName"       will create that brance of of master

//      create a javascript file  javascriptfilename.js        SAVE


// DO ALL YOU CURRENT PROJECT UPDATES HERE save them in VS Code and then type
// git add -A
// git commit -m "what changes you made ex = made arrary or made loops"
// then change the branch back to master with
// git checkout master


// MAKE SURE YOU ARE IN MASTER BRANCH WITH 
//      git branch


// git push -u origin master

// git push --all



// git checkout master        just to make sure you are in the right branch
// git merge master  will add all the changes from the branches to the master branch

// git push --all         to update github




// these are the lines of code from github:
// git remote add origin git@github.com:username/repo.git  this will be ssh 
// git push -u origin master


wills code 


1. mkdir <--- create directory
2. git init <----- initials git repository
3. code README.md <--- Creates readme
4. git add -A <--- Save
5. git commit -m "First Commit" <--- create first comment





6. git checkout -b "version001" <--- create new branch named version001
7. code nameofjsfile.js <--- create .js file
8. git add -A <--- save
9. git commit -m "added some stuff to my .js file" <--- comment what you added to the .js file
10. git checkout master <--- switch to master branch
11. git merge version001 <--- merge version001 in master(make sure your in master branch first!)
12. go to github.com and create a new repository then copy and paste remote add origin
13. git push -u origin master <--- pushes the commits to the remote master branch
14. git push --all <--- pushes all branches to repo
