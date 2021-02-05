pipeline {
  agent any
  stages {
    stage('K8S deploy') {
      steps {
        sh 'cat ./nginx-deploy.yml'
        kubernetesDeploy(
          configs: './nginx-deploy.yml',
          kubeconfigId: 'K8S',
          enableConfigSubstitution: true
        )
      }
    }
  }
}