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
        <Slide >
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
        <Slide >
          <Image src={images.api} />
        </Slide>
        <Slide >
          <Heading size={5} textColor="tertiary" margin="0 0 35px 0">Thin API layer</Heading>
          <Image width="500px" src={images.gqlSummary}/>
        </Slide>
        <Slide >
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
        <Slide >
          <Image src={images.rake} />
        </Slide>
        <Slide
          bgColor="secondary"
          textColor="primary"
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
        <Slide >
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
        <Slide >
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
        />
        <Slide >
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
                <Link href="http://twitter.com/evilmartians" textSize="2rem" textColor="#47a0ec">evilmartians</Link>
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
