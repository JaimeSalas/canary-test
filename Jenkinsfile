pipeline {
  agent any
  stages {
    stage('check Kubernetes connection') {
      steps{
        withKubeConfig([credentialsId: 'K8S-FILE', serverUrl: 'https://B170BDBA1EE79E6B939582563774E6C1.sk1.eu-west-3.eks.amazonaws.com']) {
          sh 'kubectl get ns'
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