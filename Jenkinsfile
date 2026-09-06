pipeline {

    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                    cd frontend
                    npm install
                '''
            }
        }

        stage('Deploy Express') {
            steps {
                sh '''
                    sudo rsync -av --delete \
                    --exclude=node_modules \
                    --exclude=.git \
                    frontend/ /root/applications/frontend/frontend/

                    sudo npm install --prefix /root/applications/frontend/frontend

                    sudo systemctl restart frontend

                    sudo systemctl status frontend --no-pager
                '''
            }
        }
    }
}
