pipeline {
  agent any
  stages {
    stage('check Kubernetes connection') {
      steps{
        withKubeConfig([credentialsId: 'K8S-FILE', serverUrl: 'https://85088642BED4CD54BFDE331F2AD3E4DD.yl4.eu-west-3.eks.amazonaws.com']) {
          sh 'kubectl get ns'
          sh 'kubectl apply -f nginx-deploy.yml'
        }      
      }
    }
  }
}

// withKubeConfig([credentialsId: 'K8S-FILE', serverUrl: 'https://B170BDBA1EE79E6B939582563774E6C1.sk1.eu-west-3.eks.amazonaws.com']) {
//       sh 'kubectl get ns'
//     }
// pipeline {
//   agent any
//   stages {
//     stage('K8S deploy') {
//       steps {
//         withKubeConfig([credentialsId: 'user1', serverUrl: 'https://api.k8s.my-company.com']) {
//           sh 'kubectl apply -f my-kubernetes-directory'
//         }
//       }
//     }
//   }
// }