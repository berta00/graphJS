:: update batch script for update both graphJS repo
cd ./graphJS
:: commit on main repo
git commit -a -m "automatic update (main repo)"
git push
:: pull and commit on gestionale pilati repo
cd ../gestionale-ITET-Pilati/static/graphJS/
git commit -a -m "automatic update (gestionale pilati repo)"
git pull
:: pray for no merge conflict -_-
git push
:: pull on main repo
cd ../graphJS
git pull

PAUSE
