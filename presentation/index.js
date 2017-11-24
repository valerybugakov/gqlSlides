import React, { Component } from 'react'
import CodeSlide from 'spectacle-code-slide'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-tomorrow.css'

import CodeSnippet from './code'
import Graph from '../assets/graph'
import Steps from '../assets/steps'

import {
  Slide, Text, Appear, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List,
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const images = {
  db: require('../assets/db.png'),
  anakin: require('../assets/anakin.png'),
  api: require('../assets/api.jpg'),
  graphiqlGif: require('../assets/graphiql.gif'),
  gqlSummary: require('../assets/gqlSummary.png'),
  schema: require('../assets/schema.png'),
  query1: require('../assets/query1.png'),
  query2: require('../assets/query2.png'),
  assigned: require('../assets/assigned.png'),
  who: require('../assets/who.jpg'),
  whyKitten: require('../assets/whyKitten.jpg'),
  wtf: require('../assets/wtf.jpg'),
  typenameError: require('../assets/typenameError.png'),
  rake: require('../assets/rake2.gif'),
  queryFlow: require('../assets/queryFlow.png'),
  mutation: require('../assets/mutation.png'),
  schemaRequest: require('../assets/schemaRequest.png'),
  graphqlEverything: require('../assets/graphqlEverything.png'),
  persistedQueries1: require('../assets/persistedQueries1.png'),
  persistedQueries2: require('../assets/persistedQueries2.png'),
  martians: require('../assets/martians.svg'),
  martiansMini: require('../assets/martiansMini.png'),
  products: require('../assets/products.png'),
  github: require('../assets/github.svg'),
  twitter: require('../assets/twitter.svg'),
  web: require('../assets/web.svg'),
  oss: require('../assets/oss.png'),
}

const flux = [
  require('../assets/flux1.png'),
  require('../assets/flux2.png'),
  require('../assets/flux3.png'),
  require('../assets/flux4.png'),
  require('../assets/flux5.png'),
]

preloader(images)

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

theme.screen.progress.pacman.container.mixBlendMode = 'difference'
theme.screen.progress.pacman.container.opacity = '0.5'

// class StepSlide extends Component {
//   state = {
//     steps: 0,
//   }
//
//   updateSteps = steps => {
//     if (this.state.steps !== steps) {
//       this.setState({ steps })
//     }
//   }
//
//   render() {
//     const { steps, SlideContent, ...rest } = this.props
//
//     return (
//       <Slide
//         getAppearStep={this.updateSteps}
//         {...rest}
//       >
//         <SlideContent steps={steps} />
//       </Slide>
//     )
//   }
// }

// class RestSlide extends Component {
//   render() {
//     const { steps } = this.props;
//
//     return (
//
//     )
//   }
// }

export default class Presentation extends Component {
  state = {
    steps: 0
  }

  updateSteps = steps => {
    if (this.state.steps !== steps) {
      this.setState({ steps })
    }
  }

  render() {
    const { steps } = this.state

    return (
      <Deck transition={['slide']} theme={theme} transitionDuration={500}>
        <Slide bgColor="primary">
          <Heading textSize="5rem" margin="0 60px 140px" lineHeight={1} textColor="black">
            Грабли GraphQL на клиенте
          </Heading>
          <Text textSize="1.85rem" margin="0 0 20px 0">Валерий Бугаков, Evil Martians</Text>
          <Image width="200px" src={images.martiansMini} />
        </Slide>
        <Slide>
          <Heading size={5} margin="0 0 5px 0">Evil Martians</Heading>
          <Image src={images.oss} />
        </Slide>
        <Slide>
          <Heading size={5} margin="0 0 5px 0">Evil Martians</Heading>
          <Image src={images.products} />
        </Slide>
        <Slide
          notes="
           Все больше заказчиков приходят к нам бекендом уже написанно на graphql или желание использовать его для нового продукта.
           За время работы с ними накопился список повторяющихся проблем, с которыми приходятся сталкиваться.
           План доклада примерно такой, поговорим кратко о том какие проблемы пытается решить graphql, из каких частей он состоит
           и с какими проблемами вам скорее всего придется столкнуться при работе с гкл на клиете.
          "
        >
          <Heading size={3} textColor="tertiary" margin="0 0 35px 0">План</Heading>
          <List>
            <Appear><ListItem>Почему GraphQL</ListItem></Appear>
            <Appear><ListItem>GraphQL по частям</ListItem></Appear>
            <Appear><ListItem>Типичные проблемы</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary" margin="0 0 35px 0">Почему GraphQL</Heading>
        </Slide>
        <Slide
          display="flex"
          notes="
            REST не гибок, скорее всего в таком случае мы не будет пользоваться каноническим РЕСТом
            с эндпоинтом под каждую сущность и 10 запросами на такую простую карточку

            Но тогда эднпоинт который будет хорошо подходить только для конкретной вьюхи, при появляении
            новых похожих отображений потребуются модификации текущего эндпоинта или добавление нового.
            Это всегда трейдоффы и не хотелось бы на это тратить силы при разрботке

            Например потом появится десктопное приложения использующее это же АПИ
            скорее всего данных там нужно будет забирать больше, у изображений будут другие разрешения
            так как размер экрна позволяет обобразить больше инофрмации

            в случае с РЕСТ потребуются дополнительные параметры для эндпоинтов или полностью отдельные
            под новую платформу
          "
        >
          <Layout>
            <Fill>
              <Image width="250px" src={images.db}/>
            </Fill>
            <Appear>
              <Fill>
                <Image src={images.anakin}/>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Text margin="10px 0 15px 50px" textSize={20} textAlign="left">GET — {'/person/{id}'}</Text>
                <Text margin="0 0 15px 50px" textSize={20} textAlign="left">GET — {'/planet/{id}'}</Text>
                <Text margin="0 0 15px 50px" textSize={20} textAlign="left">GET — {'/film/{id}'}</Text>
                <Appear>
                  <Text margin="45px 0 15px 50px" textSize={20} textAlign="left">GET — {'/person/{id}/card'}</Text>
                </Appear>
                <Appear>
                  <Text margin="0 0 75px 50px" textSize={20} textAlign="left">GET — {'/person/{id}?include=films,planets'}</Text>
                </Appear>
                <Appear>
                  <Text margin="0 0 0 50px" textSize={50} textAlign="left">...</Text>
                </Appear>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide
          bgColor="black"
          notes="
            6 лет назад разработчики facebook столкнулись с такой же проблемой, тогда мобильный интернет и смартфоны были еще медленнее
            и была большая проблема с тем как поддерживать быстро разивающееся АПИ для разных версий мобильных приложений.
            Нужен был удобный способ описания данных при запросе, который возвращал бы предсказуемый рельзутат соотвествующей структуры.
          "
        >
          <Layout>
            <Fill>
              <Text textColor="white" textSize="30" textAlign="left">Запрос</Text>
              <CodeSnippet
                code={require('raw-loader!../assets/anakinQuery2.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  marginLeft: '-120px',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
            <Fill>
              <Text textColor="white" textSize="30" textAlign="left">Ответ</Text>
              <CodeSnippet
                code={require('raw-loader!../assets/anakinResult2.ex')}
                lang="json"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide
          notes="
            Из этих проблем и родилась спецификация гкл. Используя гкл на бэкенде мы получаем
            данные с одного эндпоинта, описывая необходимые поля с помощью гкл запросов.

            Это решает проблемы underfetching and overfetching,
            когда мы забираем либо ненужную нам информацию, тем самым нагружая сеть, либо не имеем доступ ко всей нужной инормации сразу и вынуждены делать
            более одного раундтрипа по сети.

            Так же гкл позволяет фронтенд и бекенд командам итерироваться назвисимо друг от друга, до тех пор пока
            данные необходимые клиентам вообще есть на серевере, это не проблема добраться до них эффективно.
          "
        >
          <Image src={images.api} />
        </Slide>
        <Slide
          notes="
            Итого гкл — это тонкая прослойка между фронтендом и вашими источниками данных, будь то БД
            редис или ваш старый РЕСТ апи. Их все достаточно легко объединить под одним эндроинтом, который
            предоставит удобный доступ к данным все клиентам, подкрепленный эффективным языком запросов.
          "
        >
          <Heading size={5} textColor="tertiary" margin="0 0 35px 0">Thin API layer</Heading>
          <Image width="500px" src={images.gqlSummary}/>
        </Slide>
        <Slide
          notes="
            Для того, чтобы начать использовать гкл в вашем приложении нужно:
            1. Сначала задать схему данных — это формальное описание типов данных у вас на бекенде в виде графа
            2. Для полей этих типов необходимо создать резолверы, функции, знающие как достать сами данные.
            3. Использовать гкл как язык запросов на клиентах.
          "
        >
          <Heading size={3} textColor="tertiary" margin="0 0 35px 0">GraphQL по частям</Heading>
          <List>
            <Appear><ListItem>Схема данных</ListItem></Appear>
            <Appear><ListItem>Резолверы полей</ListItem></Appear>
            <Appear><ListItem>Язык запросов</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          getAppearStep={this.updateSteps}
          bgColor="#122B45"
          notes="
            Схема типов данных выглядит примерно так.

            Корень графа описывает поля доступные изначально в запросе. - viewer
            Другие вершины графа соответствуют сущностям, используемые на вашем сервере. - user, location
            Поля этих сущностей могут быть 2 видов — скалярные и структурированные.
            Скалярные типы данных всегда возвращают значение. - например User.name

            Если жe тип поля ссылается на другом тип в графе данных
            то клиент может запросить любое из его вложенный полей. такие поля задают ребра в графе данных и позволяют продвигаться по графу,
            выбирая нужные поля. - например User.address -> Location

            Например если мы хотим узнать в в каком городе живет пользователь.
            Пользователь у нас доступен по полю вьювер и корня графа, в типа пользователь определена связь с типом локация.
            И уже из локации мы можем получить город, вложив поля соответсвующим образом
          "
        >
          <Layout style={{ height: '550px' }}>
            <Fill>
              <Image src={steps === 0 ? images.schema : images.schemaRequest} />
            </Fill>
            <Fill>
              {steps === 0 ?
                <CodeSnippet
                  code={require('raw-loader!../assets/schema.graphql')}
                  lang="graphql"
                  codeStyle={{
                    fontSize: 22,
                    color: '#aeebff',
                    fontWeight: 'bold',
                  }}
                />
                :
                <CodeSnippet
                  code={require('raw-loader!../assets/schemaQuery.ex')}
                  lang="graphql"
                  codeStyle={{
                    fontSize: 22,
                    color: '#aeebff',
                    fontWeight: 'bold',
                  }}
                />
              }
            </Fill>
          </Layout>
          <Appear><span /></Appear>
        </Slide>
        <CodeSlide
          lang="jsx"
          notes="
            На сервере схема задается в виде строки либо в отдельном файле формата гкл.
            Для каждого поля задается функция, которая знает откуда взять соответствующее значение.
            Все это передается гкл фреймворку используемому на бекенде, который соберет из этой информации рабочий эндроинт.
          "
          color="white"
          bgColor="#122b45"
          code={require('raw-loader!../assets/serverSetup.ex')}
          ranges={[
            { loc: [0, 0], title: 'На сервере' },
            { loc: [0, 17] },
            { loc: [18, 32] },
          ]}
        />
        <Slide
          bgColor="#111"
          notes="
            Чтобы получить данные от такого сервера, необходимо отправить ему запрос валидный запрос в формате GraphQL
            Все запросы отправляются методом POST, для того чтобы строку запроса и переменные можно было передавать в BODY

            Обычно запрос возвращает JSON полностью повторяющий форму запроса.
          "
        >
          <Heading size={3} textColor="tertiary" margin="0 0 40px 0">
            На клиенте
          </Heading>
          <Layout>
            <Fill>
              <Text bold textColor="#e6e7e8" textSize="22px">
                HTTP POST request
              </Text>
              <CodeSnippet
                code={require('raw-loader!../assets/simpleQuery.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
            <Fill>
              <Text bold textColor="#e6e7e8" textSize="22px">
                JSON response
              </Text>
              <CodeSnippet
                code={require('raw-loader!../assets/simpleResponse.ex')}
                lang="json"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide
          getAppearStep={this.updateSteps}
          notes="
            Строка запроса состоит из нескольких основных частей.
            Три вида операций — Запрос данных, Мутация — запись данные, Подписка на обновления данных.
            Название операция для логгирования и дебагинга
            Декларация переменных, которые будут использованы в запросе. Слово с долларом — это название переменной, штука справа от него — тип переменной.
            Сервер может валидировать типа передываемых переменных, так как они задеклрированы в схеме данных.

            Дальше запросы можно использовать в селекшн сете, который описывает поля, которые мы хотим выбрать из графа данных.
            Переменные могут быть использованы на любом уровне вложенности селекшн сета для фильтрации данных.
          "
        >
          <Heading size={3} textColor="tertiary">
            Анатомия
          </Heading>
          <Image
            src={images.query1}
            style={steps === 1 && { opacity: 0 }}
          />
          <Appear>
            <Image
              src={images.query2}
              style={{
                position: 'absolute',
                top: '190px',
                width: '94%',
              }}
            />
          </Appear>
        </Slide>
        <Slide
          bgColor="secondary"
          textColor="primary"
          notes="
            Для того чтобы эти строки отправлять с клиента, есть вот такой солидный список библиотек.
            2 самые популярные реализации — рилэй от фб и аполло от команды метеора.
          "
        >
          <Heading size={6} textColor="tertiary">
            Клиентские библиoтеки
          </Heading>
          <List>
            <ListItem>Relay</ListItem>
            <ListItem>Apollo</ListItem>
            <ListItem>Graphql-request by Graphcool</ListItem>
            <ListItem>Graphql-client by Shopify</ListItem>
            <ListItem>Locca - not maintained</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide
          bgColor="secondary"
          textColor="primary"
          notes="
            Но зачем они нужны если можно отпралять строки фетчем и все будет прекрасно.
            На самом деле библиотеки клиентов делают кучу полезного из коробки и многое из этого они делать могут, благодаря системе типов
            которую мы описываем на бекенде.
            Полтора года назад прочитав весь этот список фич я обрадованни кинулся пробовать все это на тестовом сервере и получилось как всегда.
          "
        >
          <Heading size={6} textColor="tertiary">
            Отдельная библиотека для запросов?
          </Heading>
          <List>
            <Appear>
              <div>
                <ListItem>Подготовить запрос</ListItem>
                <ListItem>Обработать ответ</ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>Оптимистичные апдейты</ListItem>
                <ListItem>Оффлайн</ListItem>
                <ListItem>Консистентный кэш</ListItem>
                <ListItem>Подписки на обновления</ListItem>
                <ListItem>Удобный интерфейс для паджинации</ListItem>
                <ListItem>Тулзы для оптимизации</ListItem>
              </div>
            </Appear>
          </List>
        </Slide>
        <Slide
          notes="
            Как и с любой новой технологией тут не завелось, там упало, а здесь вообще работы 2 раза больше чем при использовании РЕСТ апи.
            В чем же проблема?
          "
        >
          <Image src={images.rake} />
        </Slide>
        <Slide
          bgColor="secondary"
          textColor="primary"
          notes="
            Для того чтобы эффективно использовать graphql нужно знать где лежат грабли и как их обходить.
            Граф данных и правда можно описать так, что и с гкл придется бегать на сервер по нескольку раз
            или же постоянно будете получать баги от клиента.

            Нужно понимать как гкл встраивается в привычную архитектуру проекта, чтобы эффективно его использовать

            А так же что происходит у него внутри, чтобы в случае чего либо поправить код в своей проекте, либо открыть ишью в нужном репозитрии :)
          "
        >
          <Heading size={6} textColor="tertiary">
            Где лежат грабли?
          </Heading>
          <List>
            <Appear><ListItem>Описание графа данных</ListItem></Appear>
            <Appear><ListItem>Подключение клиента к приложению</ListItem></Appear>
            <Appear><ListItem>Дебаг ошибок внутри клиента</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textFont="secondary" textColor="tertiary">1. Граф данных</Heading>
        </Slide>
        <Slide
          bgColor="#111"
          notes="
            Многие гайды по гкл начинаются с такого заголовка, но что это значит на практике?
            Как мы уже говорили первое, что нужно сделать при использовании гкл — описат схему данныx.
            При этом возникает сильное желание по привычке сделать все как раньше в REST но используя graphql фреймворк.
            Bзять эндпоинты и пересадить их в граф под какими-то именами. И это будет работать, но вы не получите никаких бонусов, о которых мы упоминали
            ранее.

            Выход: стараться работать только с данными как при проектировании DB и стараться отразить все связи между сущностями, не оглядываясь на дизайн приложения, в котором они будут использоваться.
            Таким образом вы предоставити максимальный контроль над выборкой данных клиентам.
          "
        >
          <Heading
            size={6}
            textColor="tertiary"
            style={{
              position: 'absolute',
              marginTop: '150px',
              marginLeft: '100px',
              maxWidth: '70%',
              lineHeight: '55px',
            }}
          >
            Моделировать граф данных НЕ эндпоинты
          </Heading>
          <Appear>
            <Text
              bold
              textColor="white"
              textSize="150"
              style={{
                position: 'absolute',
                top: '45%',
                left: '45%',
              }}
            >
              ?
            </Text>
          </Appear>
          <Graph />
        </Slide>
        <Slide
          bgColor="black"
          notes="
            Дизайн поменяется на текущем клиенте. Появится новый клиент с новыми требованиями.
            Конечно можно забирать картинку всегда огромную, но лучше выбирать нужного размера.
          "
        >
          <Image width="380px" src={images.assigned} />
          <Layout>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/assignedBad.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
            <Appear>
              <Fill>
                <CodeSnippet
                  code={require('raw-loader!../assets/assignedGood.ex')}
                  lang="graphql"
                  codeStyle={{
                    fontSize: 22,
                    color: '#aeebff',
                    fontWeight: 'bold',
                  }}
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide
          bgColor="black"
          notes="
            В случае, если нам нужно добавить фичу, которая не мапится на сущность в базе данных, например поиск,
            мы обычно добавляли ее на отдельный эндпоинт. Например эндпоинт для поиска пользователей. Но перед тем как делать, стоит
            задать вопрос, будет ли такая модель удобна для будущих версий приложений, где добавиться экранов и сущностей.

            В данном случае более дальновидным ходом было бы отвязать фичу поиска от пользователей связать резльутаты поиска с ними.
            Таким образом при добавлении новых сущностей по которым мы можем искать, достаточно будет добавить еще одну связь и клиенты сразу начнут получать
            нужные резльутаты. Кроме того можно использовать мета-фичи — например недавние поисковые запросы и привязать их к поиску, чтотбы показывать пользователю.
            Схема получается более гибкая и расширяемая.
          "
        >
          <Heading size={5} textColor="white">Фичи отдельно от данных</Heading>
          <Layout>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/searchUsers.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
            <Appear>
              <Fill>
                <CodeSnippet
                  code={require('raw-loader!../assets/searchQuery.ex')}
                  lang="graphql"
                  codeStyle={{
                    fontSize: 22,
                    color: '#aeebff',
                    fontWeight: 'bold',
                  }}
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide
          notes="
            В итоге все советы по поводу схемы данных сводятся к одной мысли, что клиенты, должны иметь возможность
            выбирать только то, что им нужно в любой ситуации. Ярким примером в котором все об этом забывают — результаты мутаций.
            Принято возввращать только новую сущность или измененные поля. Хотя, например, при создании ревью у нас может измениться
            список самых активных авторов и если из ревью получить доступ к этой информации невозможно, клиентам придется дублироваться эту логику
            или делать второй запрос.

            Это решается простым трюком, в резовлерах на бекенде нам доступен контекст выполнения запроса, а в нем и ссылка на корень нашего графа данных.
            Проблема решается добавлением, поля ссыляющего на корень в результат каждой мутации. Тогда клиенты смогут получить все необходимые изменения
            дойдя через корень до нужной вершины.
          "
        >
          <Heading size={3} textColor="tertiary">Доступность данных</Heading>
          <Layout>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/muatation.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  // color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
            <Fill>
              <Image src={images.mutation} />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Image src={images.who} />
            </Fill>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/who.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  fontWeight: 'bold',
                }}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={3} textFont="secondary" textColor="tertiary">2. Интеграция клиента</Heading>
        </Slide>
        <CodeSlide
          notes="
            Аполло клиент позицианирует себя как самый юзер френдли клиент.
            Это на самом деле так, он не требует билд степа и его мнимальный сетап занимает 10 строчек кода.
          "
          lang="js"
          color="white"
          bgColor="#122b45"
          code={require('raw-loader!../assets/clientSetup.ex')}
          ranges={[
            { loc: [0, 0], title: 'Apollo Client setup' },
            { loc: [0, 3] },
            { loc: [4, 9] },
          ]}
        />
        <Slide
          bgColor="#111"
          notes="
            При таком минимальном сетапе мы запрашиваем данные с бекенда,
            клиент сохраняет их в своем кеше,
            далее мы сохраняем полученные данные в наш клиентский стор и оттуда
            уже подключаем к вьюхам привычным нам образом. Все круто, мы используем гкл
            но есть пара проблем. Мы дублируем данные в кэше и клиентском сторе.
            Если приложение больше и пользователь активно перемещается между страницами,
            мы будем хранить все больше данных,
            что может вылиться в тормоза на слабых девайсах

            Кроме того мы дублируем много логики для обработки запросов —
            это мониторинг статуса запрроса, дедупличкация, отмена запроса,
            нормализация полученные данных, а так же обновление данных.
          "
        >
          <Heading size={5} textColor="tertiary" margin="0 0 200px 80px">
            Этапы загрузки данных
          </Heading>
          <Steps
            steps={[
              {
                label: 1,
                title: 'API',
              },
              {
                label: 2,
                title: 'Apollo Client',
              },
              {
                label: 3,
                title: 'Redux/Mobx',
              },
              {
                label: 4,
                title: 'View',
              },
            ]}
          />
        </Slide>
        <Slide>
          <Image width="1000px" src={images.whyKitten}/>
        </Slide>
        <Slide bgColor="#111">
          <Heading size={5} textColor="tertiary" margin="0 0 200px 80px">
            Этапы загрузки данных
          </Heading>
          <Steps
            steps={[
              {
                label: 1,
                title: 'API',
              },
              {
                label: 2,
                title: 'Apollo Client',
              },
              {
                label: 3,
                title: 'View',
              },
            ]}
          />
        </Slide>
        <CodeSlide
          lang="jsx"
          color="white"
          bgColor="#122b45"
          code={require('raw-loader!../assets/reactApollo.ex')}
          ranges={[
            { loc: [0, 0], title: 'React Apollo' },
            { loc: [0, 9], note: 'Provider' },
            { loc: [10, 17], note: 'Container' },
            { loc: [18, 33], note: 'Render' },
          ]}
        />
        <Slide bgColor="#122b45" getAppearStep={this.updateSteps}>
          <Image src={flux[steps]}/>
          <Appear><span /></Appear>
          <Appear><span /></Appear>
          <Appear><span /></Appear>
          <Appear><span /></Appear>
        </Slide>
        <Slide bgColor="#fcfdfd">
          <Heading size={3} textColor="tertiary" textFont="primary" margin="0 0 35px 0">
            GraphQL everything
          </Heading>
          <Image src={images.graphqlEverything} />
        </Slide>
        <Slide bgColor="black">
          <Heading size={3} textFont="secondary" textColor="tertiary">
            3. Внутри клиента
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.wtf}/>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} textColor="tertiary" textFont="primary" margin="0 0 35px 0">
            По шагам
          </Heading>
          <Image src={images.queryFlow}/>
        </Slide>
        <Slide>
          <Heading size={3} fill textColor="tertiary">
            Devtools!
          </Heading>
          <List>
            <ListItem textSize="40px">
              GraphiQL
            </ListItem>
          </List>
        </Slide>
        <Slide
          notes="
            ХОРОШО БЫ ИМЕТЬ МЕТА ДАННЫЕ О ТОМ ЧТО МОЖНО ЗАБРАТЬ С БЭКЕНДА и использовать их для верификации запросов у клиентов

            хорошо бы иметь ТУЛЗЫ ДЛЯ ПРОСМОТРА ИНФОРМАЦИИ О ТОМ ЧТО ЕСТЬ НА СЕРВЕРЕ
          "
        >
          <Image src={images.graphiqlGif}/>
        </Slide>
        <Slide>
          <Heading size={3} fill textColor="tertiary">
            Devtools!
          </Heading>
          <List>
            <ListItem textSize="40px">
              GraphiQL
            </ListItem>
            <ListItem textSize="40px">
              Eslint-plugin-graphql
            </ListItem>
            <ListItem textSize="40px">
              Apollo-codegen
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary" textFont="primary" margin="0 0 50px 0">
            Парсили парсили...
          </Heading>
          <Image src={images.typenameError}/>
        </Slide>
        <CodeSlide
          lang="js"
          color="white"
          bgColor="#122b45"
          code={require('raw-loader!../assets/union.ex')}
          ranges={[
            { loc: [0, 0], title: '__typename' },
            { loc: [0, 6] },
            { loc: [7, 19] },
            { loc: [20, 36] },
          ]}
          notes="
            Persisted Queries
          "
        />
        <Slide
          notes="
            Persisted queries provide a number of immediate benefits, most importantly query whitelisting and reduced bandwidth usage. Because persisted queries are static by definition, they also give you the possibility of optimizing execution on the server for specific queries, for example by hand-crafting a highly efficient database query.
          "
        >
          <Image src={images.persistedQueries1} />
          <Image src={images.persistedQueries2} />
        </Slide>
        <Slide>
          <Heading fill size={4} textColor="tertiary">
            Persisted queries
          </Heading>
          <List>
            <ListItem>
              Добавить build step – <Text
                bold
                textColor="#4da399"
                style={{ display: 'inline-block' }}
              >
                persistgraphql
              </Text>
            </ListItem>
            <ListItem>
              Добавить <Text
                bold
                textColor="#4da399"
                style={{ display: 'inline-block' }}
              >
                middleware
              </Text> на сервер
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="js"
          color="white"
          bgColor="#122b45"
          code={require('raw-loader!../assets/cacheDiff.ex')}
          ranges={[
            { loc: [0, 0], title: 'Проверка кэша' },
            { loc: [0, 12] },
          ]}
          notes="
            Persisted Queries
          "
        />
        <Slide bgColor="#111">
          <Heading fill size={4} textColor="tertiary">Сохранение результата</Heading>
          <Layout>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/cacheResponse.ex')}
                lang="json"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/store.ex')}
                lang="json"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="black">
          <Image width="380px" src={images.assigned} />
          <Layout>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/assignedBad.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
            <Fill>
              <CodeSnippet
                code={require('raw-loader!../assets/assignedGood.ex')}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  color: '#aeebff',
                  fontWeight: 'bold',
                }}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="black">
          <Text bold textColor="tertiary">Если мы не контролируем данные</Text>
          <CodeSnippet
            code={require('raw-loader!../assets/dataId.ex')}
            lang="js"
            codeStyle={{
              fontSize: 22,
              color: '#aeebff',
              fontWeight: 'bold',
            }}
          />
        </Slide>
        <Slide bgColor="black">
          <Text bold textColor="tertiary">Если мы не контролируем данные</Text>
          <CodeSnippet
            code={require('raw-loader!../assets/customUpdate.ex')}
            lang="js"
            codeStyle={{
              fontSize: 22,
              color: '#aeebff',
              fontWeight: 'bold',
            }}
          />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary">
            Итого
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="35px">
                Моделируйте граф данных
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                Используйте все фичи клиентов
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                Следите за кэшем
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                ❤️ GraphQL
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading textAlign="left" margin="0 0 50px 0" size={4} bold={false}>Вопросы?</Heading>
          <Layout>
            <Fill
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={images.twitter} width="40px" height="40px" margin="0 15px 0 0" />
                <Link href="http://twitter.com/valerybugakov" textSize="2rem" textColor="#47a0ec">valerybugakov</Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                <Image src={images.github} width="40px" height="40px" margin="0 15px 0 0" />
                <Link href="http://github.com/valerybugakov" textColor="black" textSize="2rem">valerybugakov</Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <Image src={images.twitter} width="40px" height="40px" margin="0 15px 0 0" />
                <Text href="http://twitter.com/evilmartians" textSize="2rem" textColor="#47a0ec">evilmartians</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                <Image src={images.web} width="40px" height="40px" margin="0 15px 0 0" />
                <Link textSize="2rem" textColor="black" href="http://evl.ms">http://evl.ms</Link>
              </div>
            </Fill>
            <Fill>
              <Image width="80%" src={images.martians} />
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    )
  }
}
