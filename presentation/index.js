// Import React
import React from "react";
import CodePrism from 'react-prism';
import CodeSlide from 'spectacle-code-slide'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-tomorrow.css'

import CodeSnippet from './code'
import Graph from '../assets/graph'
import Steps from '../assets/steps'

import {
  S, Appear, BlockQuote, Cite, Code, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import createTheme from "spectacle/lib/themes/default";

import Interactive from '../assets/interactive';

// Require CSS
require("normalize.css");

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  db: require('../assets/db.png'),
  anakin: require('../assets/anakin.png'),
  mushroom: require('../assets/mushroom.jpg'),
  mushrooms: require('../assets/mushrooms.svg'),
  api: require('../assets/api.jpg'),
  rest1: require('../assets/11.png'),
  rest2: require('../assets/22.png'),
  graphiql: require('../assets/graphiql.png'),
  graphiqlGif: require('../assets/graphiql.gif'),
  gqlSummary: require('../assets/gqlSummary.png'),
  schema: require('../assets/schema.png'),
  query1: require('../assets/query1.png'),
  query2: require('../assets/query2.png'),
  assigned: require('../assets/assigned.png'),
  who: require('../assets/who.jpg'),
  whyKitten: require('../assets/whyKitten.jpg'),
  future: require('../assets/future.jpg'),
  fragment1: require('../assets/fragment1.png'),
  fragment2: require('../assets/fragment2.png'),
  reuse: require('../assets/reuse.png'),
  dataComponent: require('../assets/dataComponent.png'),
  wtf: require('../assets/wtf.jpg'),
  typenameError: require('../assets/typenameError.png'),
  cache: require('../assets/cache.png'),
  rake: require('../assets/rake2.gif'),
  queryFlow: require('../assets/queryFlow.png'),
};

const flux = [
  require('../assets/flux1.png'),
  require('../assets/flux2.png'),
  require('../assets/flux3.png'),
  require('../assets/flux4.png'),
  require('../assets/flux5.png'),
]

preloader(images);

// const theme = createTheme({
//   primary: '#ff4081'
// });
const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  state = {
    steps: 0
  }

  updateSteps = steps => {
    if (this.state.steps !== steps) { // eslint-disable-line no-invalid-this
      this.setState({ steps }); // eslint-disable-line no-invalid-this
    }
  }

  render() {
    const code = `
    "person": {
      "name": "Darth Vader",
      "birthYear": "41.9BBY",
      "planet": {
        "name": "Tatooine"
      },
      "films": [
        { "title": "A New Hope" },
        { "title": "The Empire Strikes Back" },
        { "title": "Return of the Jedi" },
        { "title": "Revenge of the Sith" }
      ]
    }`

    const code2 = `
    "person": {
      "name": "Darth Vader",
      "birthYear": "41.9BBY",
      "planet": {
        "name": "Tatooine"
      },
      "films": [
        {
          "title": "A New Hope",
          "year": 1992
        },
        { "title": "The Empire Strikes Back" },
        { "title": "Return of the Jedi" },
        { "title": "Revenge of the Sith" }
      ]
    }`

    console.log(this.state.steps)
    const { steps } = this.state

    return (
      <Deck transition={['slide']} theme={theme} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Spectacle
          </Heading>
          <Heading size={1} fit caps>
            A ReactJS Presentation Library
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Where You Can Write Your Decks In JSX
          </Heading>
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
        </Slide>
        <Slide transition={[]} display="flex" getAppearStep={this.updateSteps}>
          <Layout>
            <Fill>
              <Image src={images.db}/>
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
                  <Image width="220px" src={images.mushrooms} />
                </Appear>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide>
          <Image src={images.api} />
        </Slide>
        <Slide>
          <Image src={images.graphiqlGif}/>
        </Slide>
        <Slide>
          <Image src={images.gqlSummary}/>
        </Slide>
        <Slide>
          <Heading>GraphQL по частям</Heading>
          <List>
            <Appear><ListItem>Схема данных</ListItem></Appear>
            <Appear><ListItem>Резолверы</ListItem></Appear>
            <Appear><ListItem>Язык запросов</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="#122B45">
          <Image src={images.schema} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          color="white"
          bgColor="#122b45"
          code={require("raw-loader!../assets/serverSetup.ex")}
          ranges={[
            { loc: [0, 20], title: "На сервере" },
            { loc: [0, 10] },
            { loc: [11, 18], note: "Resolvers" },
          ]}
        />
        <Slide getAppearStep={this.updateSteps}>
          <Heading>На клиенте</Heading>
          <Image
            src={images.query1}
            style={steps === 1 && { opacity: 0 }}
          />
          <Appear>
            <Image
              src={images.query2}
              style={{
                position: 'absolute',
                top: '220px',
                width: '94%',
              }}
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary">
            Отдельная библиотека для запросов?
          </Heading>
          <List>
            <Appear><ListItem>Подготовить запрос</ListItem></Appear>
            <Appear><ListItem>Распарсить ответ</ListItem></Appear>
            <Appear><ListItem>Оптимистичные апдейты</ListItem></Appear>
            <Appear><ListItem>Оффлайн</ListItem></Appear>
            <Appear><ListItem>Консистентный кэш</ListItem></Appear>
            <Appear><ListItem>Подписки на обновления</ListItem></Appear>
            <Appear><ListItem>Удобный интерфейс для паджинации</ListItem></Appear>
            <Appear><ListItem>Тулзы для оптимизации</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Image src={images.rake} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary">
            Где лежат грабли?
          </Heading>
          <List>
            <Appear><ListItem>Сетап графа данных</ListItem></Appear>
            <Appear><ListItem>Подключение клиента к приложению</ListItem></Appear>
            <Appear><ListItem>Организация кода</ListItem></Appear>
            <Appear><ListItem>Дебаг ошибок</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="#111">
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
          <Graph />
        </Slide>
        <Slide bgColor="black">
          <Image width="380px" src={images.assigned} />
          <Layout>
            <Fill>
              <CodeSnippet
                code={require("raw-loader!../assets/assignedBad.ex")}
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
                  code={require("raw-loader!../assets/assignedGood.ex")}
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
        <Slide bgColor="black">
          <Heading size={5} textColor="white">Больше аргументов</Heading>
          <Layout>
            <Fill>
              <CodeSnippet
                code={require("raw-loader!../assets/searchQuery.ex")}
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
                  code={require("raw-loader!../assets/arguments.ex")}
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
        <Slide>
          <Layout>
            <Fill>
              <Image src={images.who} />
            </Fill>
            <Fill>
              <CodeSnippet
                code={require("raw-loader!../assets/who.ex")}
                lang="graphql"
                codeStyle={{
                  fontSize: 22,
                  fontWeight: 'bold',
                }}
              />
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          color="white"
          bgColor="#122b45"
          code={require("raw-loader!../assets/clientSetup.ex")}
          ranges={[
            { loc: [0, 9], title: "Apollo Client setup" },
            { loc: [5, 6] },
            { loc: [6, 7] },
          ]}
        />
        <Slide bgColor="#111">
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
        <CodeSlide
          transition={[]}
          lang="jsx"
          color="white"
          bgColor="#122b45"
          code={require("raw-loader!../assets/request.ex")}
          ranges={[
            { loc: [0, 0], title: "Стандартный запрос" },
            { loc: [0, 5], note: "Actions" },
            { loc: [6, 11], note: "Reducer" },
            { loc: [12, 23], note: "Thunk" },
            { loc: [24, 32], note: "Connect" },
            { loc: [33, 41], note: "Lifecycle" },
            { loc: [42, 55], note: "Render" },
            { loc: [42, 55], note: "Нормализация?" },
            { loc: [42, 55], note: "Оптимистиченые апдейты?" },
          ]}
        />
        <Slide>
          <Image width="1000px" src={images.whyKitten}/>
        </Slide>
        <Slide bgColor="#111">
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
          transition={[]}
          lang="jsx"
          color="white"
          bgColor="#122b45"
          code={require("raw-loader!../assets/reactApollo.ex")}
          ranges={[
            { loc: [0, 0], title: "React Apollo" },
            { loc: [0, 9], note: "Provider" },
            { loc: [10, 21], note: "Container" },
            { loc: [22, 37], note: "Render" },
          ]}
        />
        <Slide bgColor="#122b45" getAppearStep={this.updateSteps}>
          <Image src={flux[steps]}/>
          <Appear><span /></Appear>
          <Appear><span /></Appear>
          <Appear><span /></Appear>
          <Appear><span /></Appear>
        </Slide>
        <Slide transition={['slide']} bgImage={images.future.replace('/', '')} />
        <Slide getAppearStep={this.updateSteps}>
          <Heading>Фрагменты</Heading>
          <Image
            src={images.fragment1}
            style={steps === 1 && { opacity: 0 }}
          />
          <Appear>
            <Image
              src={images.fragment2}
              style={{
                position: 'absolute',
                top: '244px',
                width: '70%',
                marginLeft: '140px',
              }}
            />
          </Appear>
        </Slide>
        <Slide >
          <Image src={images.reuse}/>
        </Slide>
        <Slide bgColor="black">
          <CodeSnippet
            code={require("raw-loader!../assets/reuseBad.ex")}
            lang="js"
            codeStyle={{
              fontSize: 22,
              color: '#aeebff',
              fontWeight: 'bold',
            }}
          />
        </Slide>
        <Slide bgColor="#122b45">
          <Image src={images.dataComponent}/>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          color="white"
          bgColor="#122b45"
          code={require("raw-loader!../assets/reuseGood.ex")}
          ranges={[
            { loc: [0, 10], note: "Static fragment" },
            { loc: [10, 20], note: "Parent component" },
            { loc: [20, 26], note: "Container" },
          ]}
        />
        <Slide>
          <Heading size={2} caps fit textColor="tertiary" textFont="primary">
            Ошибка внутри клиента?
          </Heading>
          <Image src={images.wtf}/>
        </Slide>
        <Slide bgColor="#172b43">
          <Heading size={2} textColor="tertiary" textFont="primary">
            По шагам
          </Heading>
          <Image src={images.queryFlow}/>
        </Slide>
        <Slide>
          <Heading size={5} textAlign="left" textColor="tertiary">
            Devtools!
          </Heading>
          <Heading size={5} textAlign="left" textColor="tertiary">
            Graphiql
          </Heading>
          <Heading size={5} textAlign="left" textColor="tertiary">
            Eslint-plugin-graphql
          </Heading>
          <Heading size={5} textAlign="left" textColor="tertiary">
            Apollo-codegen
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary" textFont="primary">
            Парсили парсили...
          </Heading>
          <Image src={images.typenameError}/>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="graphql"
          color="white"
          bgColor="#122b45"
          code={require("raw-loader!../assets/union.ex")}
          ranges={[
            { loc: [0, 6], note: "Union type" },
            { loc: [7, 19], note: "Инлайн фрагменты" },
            { loc: [20, 36] },
          ]}
        />
        <Slide>
          <Image src={images.cache}/>
        </Slide>
        <Slide>
          <Heading>MORE DATA</Heading>
        </Slide>
        <Slide bgColor="#111">
          <Heading>Cache consistency</Heading>
          <CodeSnippet
            code={require("raw-loader!../assets/store.ex")}
            lang="json"
            codeStyle={{
              fontSize: 22,
              color: '#aeebff',
              fontWeight: 'bold',
            }}
          />
        </Slide>

        <Slide bgColor="black">
          <Image width="380px" src={images.assigned} />
          <Layout>
            <Fill>
              <CodeSnippet
                code={require("raw-loader!../assets/assignedBad.ex")}
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
                code={require("raw-loader!../assets/assignedGood.ex")}
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

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
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
                Переиспользуйте фрагменты правильно
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                Следите за кэшем
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
