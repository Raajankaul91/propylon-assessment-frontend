# propylon-assessment-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# propylon-assessment-testing requirement fulfilment notes:


# All Requirements fulflled
Requirements \
\
Functional  ALL DONE\
\
• Stores files of any type and name

• Stores files at any URL

• Does not allow interaction by non-authenticated users

• Does not allow a user to access files submitted by another user

• Allows users to store multiple revisions of the same file at the same URL

• Allows users to fetch any revision of any file

• Demonstrate functionality that allows a client to retrieve any given version of document using a endpoint that implements a Content Addressable Storage mechanism.

# Stretch

• Demonstrate basic read/write permissions enforcement on individual versions of documents. ------DONE

• Create a UI for viewing differences in content between file versions. -------OUT OF TIME

# Deadlock in UnitTesting

## Please refer to the image attachment sent in the assessment completion email

I spent an entire day trying to figure out why I am getting that error. How can 1 path be conflicting with itself? One plath that starts from the root folder and other one fron the next child folder of the same root folder. Somehow django does not understand this. This is just thrown when I try to import the model in tests file.

I have created 2 tests for the urls, that are functional as they do not involve models, rest I could not do due to the above. 

I can do a unit test apart from django project just to demostrate unittesting skills, if you think it would be necessary.

Also, if you know why the Runtime error is thrown please do let me know. It might be  helpful in the future as well.

Thanks.

# Fontend guide

All elements in the frontend are functional (INCLUDING LOGIN and LOGOUT) except the edit icon at the end of every row. Though it is just a symbolic representation of the read/write permissions on that file, the eye is still clickable and can display the encapsulated file within. If not, then it will be downloaded.

Clicking on the eye revels the user defined path with version parameter.

Note :- The read/write permissions are enforced on the files that are stored at CAS locations and not the files you see in the frontend.

3 buttons:
-----
search: this is used to search the database based on its path, filename and version.

Example: path/to/file/file_name.ext?version=1 

this file can viewed at 

http://localhost:8080/path/to/file/file_name.ext?version=1 

-----
Content based search: this is a search functionality that is used to search the file by its content. Due to the file format limitations this was only implemented for 

file_type = ["text/plain", "text/rtf"]
-----

Add files : this is a window that takes in the file, file path and read/write permission that needs to be enforced on the file.

Imp note:
### The given file path should not be starting or ending with a "/".

Example file path : path/to/file
----

# Backend Guide
in-short

tokens for user authentication. (req. Does not allow interaction by non-authenticated users)

scopes.py for between user seperation (req. Does not allow a user to access files submitted by another user)

1 thing to note - since I could not find a CAS library. I am fragmenting the hash myself for path creation. and it still meets with the benefits of CAS storage.

os.chmod is used for enforcing permissions but this is only implemented for the files that are stored in CAS storage. 

Also, CAS storage are saved under media folder in the root directory.








