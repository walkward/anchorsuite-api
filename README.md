Cloud Functions Reference:
----
Deploy function:
--
Test Function:
- ```gcloud beta functions call <function name>```
Deploy Function:
- ```npm run deploy_<name of function>```
Call Function:
- ```gcloud beta functions call <function name>```

Functions Emulator Reference
----
Deploy function:
--
Start the Emulator:
- ```functions start```
Deploy Function:
- ```functions deploy <function name> --trigger-http```
Call Function:
- ```functions call <function name>```
Read Logs:
- ```functions logs read```
