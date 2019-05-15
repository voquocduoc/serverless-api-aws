# serverless-api-aws

#todo
npm install -g aws-cli serverless

#help
sls --help

#configure credentials
sls config credentials --provider aws --key YOUR KEY --secret YOUR SECRET --profile serverless-admin


# mini project
## Template: aws-nodejs

sls create -t aws-nodejs

## invoke local
export SLS_DEBUG=true
sls invoke local -f hello

## invoke with event
sls invoke local -f hello -d '{"first": "Duoc", "second": "Vo"}'


# Serverless offline
npm init -y
npm install --save-dev serverless-offline
serverless offline 

# Deploy mini project
sls deploy 
sls deploy -f hello
sls deploy -s production -f hello

#log
sls logs -f hello -s dev --startTime 10m

# remove
sls remove -s dev