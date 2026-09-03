pipeline {

    agent any

    stages {

        stage('Pull Code') {
            steps {
                git 'https://github.com/YOUR_USERNAME/express-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy Express') {
            steps {
                sh 'sudo systemctl restart express'
            }
        }

    }
}
