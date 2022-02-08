#!/bin/bash

ls -la ~/.ssh/
ssh user@scar-incom.ru -t -p 2222 -F ~/.ssh/config "sh web-deploy.sh"
exit