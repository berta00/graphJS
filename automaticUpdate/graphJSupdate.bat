:: update batch script for update both graphJS repo

:: commit on main repo
cd ./graphJS
git add *
git commit -m "automatic update (main repo)"
:: on gestionale pilati repo
cd ../gestionale-ITET-Pilati/static/graphJS/
git add *
git commit -m "automatic update (gestionale pilati repo)"

:: update on main repo
cd ../../../graphJS
git pull
git push

:: update on gestionale pilati repo
cd ../gestionale-ITET-Pilati/static/graphJS/
git pull
git push

:: reupdate main direcotry
cd ../../../graphJS
git pull

PAUSE
