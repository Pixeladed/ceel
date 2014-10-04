##Ceel
> Command-line tool to quickly turn web project into web app

###Installation

	$ npm install ceel
	
###Purpose

This command-line tools will create a nodejs server that return your html files.

**Example usage**

- Quickly test Ajax calls
- Develop with libraries that require a server eg: Less.js

	
###Usage

	$ ceel options
	
After running ceel, open your browser and go to `0.0.0.0:8000`
	
###Options

You can only use 1 of the 2 avalaible options

**1. `path/to/project/folder`**

This option can be use for ceel to run on the provided folder. If leave blank or use custom html file option instead, it will run on the folder that you are on at the terminal.

	$ ceel path/to/project/folder

**2. `custom.html`**

The default value of the html file to host is `index.html` and `index.htm`. You can use this function to tell Ceel what html file to host

	$ ceel main.html