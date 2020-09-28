import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  public services: any[] = [
    {
      serviceName: 'Pintor',
      serviceImage: '/assets/images/test.jpeg'
    },
    {
      serviceName: 'Pedreiro',
      serviceImage: '/assets/images/test.jpeg'
    },
    {
      serviceName: 'Ajudante',
      serviceImage: '/assets/images/test.jpeg'
    },
    {
      serviceName: 'Eletricista',
      serviceImage: '/assets/images/test.jpeg'
    },
    {
      serviceName: 'Gesso',
      serviceImage: '/assets/images/test.jpeg'
    },
    {
      serviceName: 'Marceneiro',
      serviceImage: '/assets/images/test.jpeg'
    },
    {
      serviceName: 'Encanador',
      serviceImage: '/assets/images/test.jpeg'
    }
  ]

  public professionalVariables: boolean = true;
  constructor() { }

  public mainVariables: any[] = [
    {
      title: 'Facilidades',
      list: [
        {
          label: 'Automovel',
          price: null
        },
        {
          label: 'Nota Fiscal',
          price: null
        },
        {
          label: 'Automovel',
          price: null
        },
        {
          label: 'Nota Fiscal',
          price: null
        }
      ]
    },
    {
      title: 'Guia de diárias',
      list: [
        {
          label: 'Eletricista',
          price: 150.00
        },
        {
          label: 'Pedreiro',
          price: 100.00
        },
        {
          label: 'Eletricista',
          price: 150.00
        },
        {
          label: 'Pedreiro',
          price: 100.00
        }
      ]
    }
  ]

  public faqs: any[] = [
    {
      question: 'Pergunta frequente',
      answer: 'Resposta',
      new: false
    },
    {
      question: 'Pergunta frequente',
      answer: 'Resposta',
      new: false
    }
  ]


  public texts: any[] = [
    {
      title: 'Liberdade',
      subtitle: 'Trabalhe quando estiver disponível. Seja seu próprio chefe.'
    },
    {
      title: 'Ganhe por dia',
      subtitle: 'Você determina o valor da sua diária de serviços.'
    },
    {
      title: 'Facilidade',
      subtitle: 'Você negocia diretamente com o cliente!'
    }
  ]


  ngOnInit(): void {
  }

  addQuestion(): void {
    this.faqs.push({
      question: 'Insira sua pergunta aqui',
      answer: 'Insira sua resposta aqui',
      new: true
    })
  }

}
