SELECT "english_title" FROM "views"
WHERE "artist" = 'Hokusai' AND "contrast" < 0.4
ORDER BY "contrast" LIMIT 5;
