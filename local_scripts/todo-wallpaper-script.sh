#!/bin/sh
echo `date` : checking Notion database for updates
result=$(/usr/local/bin/node /Desktop/notion-todo/script.js);

if [ -z "$result" ]
then echo "no change"
else echo "$result"
fi
