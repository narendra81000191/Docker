pipeline {
    agent any

    tools {
        maven 'Maven'
        jdk 'JDK17'
        nodejs 'Node18'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/narendra81000191/Docker.git'
            }
        }

        stage('Build Backend JAR') {
            steps {
                dir('UserManagement') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t user-management-app ./UserManagement'
            }
        }

        stage('Build Frontend (Angular)') {
            steps {
                dir('UserManagement-app') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t frontend-app ./UserManagement-app'
            }
        }

        stage('Run Compose') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d'
            }
        }
    }
}