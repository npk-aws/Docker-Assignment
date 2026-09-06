pipeline {

    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm install
                '''
            }
        }

        stage('Deploy Express') {
            steps {
                sh '''
                    sudo systemctl restart frontend
                    sudo systemctl status frontend --no-pager
                '''
            }
        }
    }
}
