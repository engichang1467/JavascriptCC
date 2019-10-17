all: gitAdd gitPull

gitAdd:
	git add .
	git commit -m "work still in progress"
	git push

gitPull:
	git pull