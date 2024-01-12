-- CREATE DATABASE IF NOT EXISTS taskerdb
SELECT 'CREATE DATABASE serverlessdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'serverlessdb')\gexec