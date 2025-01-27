SELECT "first_name" AS 'First Name', "last_name" AS 'Last Name' FROM "players"
WHERE "final_game" BETWEEN '2022-01-01' AND '2022-12-31'
ORDER BY "first_name", "last_name";
