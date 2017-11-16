import React from "react";
import CodeSlide from 'spectacle-code-slide'
// import ImageSlide from 'spectacle-image-slide'
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
// import Interactive from '../assets/interactive';

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

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

theme.screen.progress.pacman.container.mixBlendMode = 'difference'

export default class Presentation extends React.Component {
  state = {
    steps: 0
  }

  updateSteps = steps => {
    if (this.state.steps !== steps) {
      this.setState({ steps })
    }
  }

  render() {
    console.log(this.state.steps)
    const { steps } = this.state

    return (
      <Deck transition={['slide']} theme={theme} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            GraphQL FTW
          </Heading>
        </Slide>
        <Slide
          transition={[]}
          display="flex"
          getAppearStep={this.updateSteps}
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
          notes="
            АПИ должно быть эффективным — мы хотим ЗАБИРАТЬ ТОЛЬКО ТЕ ДАННЫЕ,
            КОТОРЫЕ НАМ НУЖНЫ чтобы СВЕСТИ НАГРУЗКУ НА СЕТЬ К МИНИМУМУ,
            и мы НЕ ХОТИМ ДЕЛАТЬ МНОГО ЗАПРОСОВ, особенно актуально для мобильных девайсов с плохой связью,
            в идеале хотим забирать все что нам нужно сразу.

            Гкл ПЕРЕКЛАДЫВАЕТ всю ответсветнность за данные на серверную команду предоставляя возможность клиентам
            работать НЕЗАВИСИМО
            клиенты должны иметь возможность описывать поля, которые им нужны
            опираясь на информацию о том, что есть на сервере, типы этих полей.
          "
        >
          <Image src={images.api} />
        </Slide>
        <Slide
          transition={[]}
          bgColor="black"
          notes="
            ХОРОШО БЫ ИЗМЕНЯТЬ АПИ КОГДА ЭТО НУЖНО без введения новых версий, сохраняя поддержку для старых, пока это необходимо
            (опять привет от разных версий моб. приложений)
          "
        >
          <Layout>
            <Fill>
              <Text textColor="white" textSize="30" textAlign="left">Запрос</Text>
              <CodeSnippet
                code={require("raw-loader!../assets/anakinQuery2.ex")}
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
                code={require("raw-loader!../assets/anakinResult2.ex")}
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
            ХОРОШО БЫ ИМЕТЬ МЕТА ДАННЫЕ О ТОМ ЧТО МОЖНО ЗАБРАТЬ С БЭКЕНДА и использовать их для верификации запросов у клиентов

            хорошо бы иметь ТУЛЗЫ ДЛЯ ПРОСМОТРА ИНФОРМАЦИИ О ТОМ ЧТО ЕСТЬ НА СЕРВЕРЕ
          "
        >
          <Image src={images.graphiqlGif}/>
        </Slide>
        <Slide
          notes="
            Итого гкл — это тонкая прослойка между фронтендом и вашими источниками данных, будь то БД
            редис сторонний АПИ или ваш старый РЕСТ апи. Их все достаточно легко объединить под одним эндроинтом, который
            предоставит удобный доступ к данным все клиентам, подкрепленный системой типов и эффективным языком запросов.
          "
        >
          <Image src={images.gqlSummary}/>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary" margin="0 0 35px 0">GraphQL по частям</Heading>
          <List>
            <Appear><ListItem>Схема данных</ListItem></Appear>
            <Appear><ListItem>Резолверы полей</ListItem></Appear>
            <Appear><ListItem>Язык запросов</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          bgColor="#122B45"
          notes="
            Схема в гкл — описание того графа данных доступных на сервере. Это формальная система типов
            в которой можно задать поля для каждого типа и связи этих типов между собой.

            Корень графа описывает поля доступные изначально в запросе. Если тип поля ссылается на другом тип в графе данных
            то клиент может запросить любое из его вложенный полей. Такие связи так же могут быть рекурсивными и сколь угодно
            вложенными, если этого не ограничивает сервер.

            Скалярные типы данных всегда возвращают значение в отличие от структурированных.

            Любой гкл сервер может отдать метаданные о доступных типах в стандартном виде, например в виде JSON.
          "
        >
          <Layout>
            <Fill>
              <Image src={images.schema} />
            </Fill>
            <Fill>
              <CodeSnippet
                code={require("raw-loader!../assets/schema.graphql")}
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
        <CodeSlide
          transition={[]}
          lang="jsx"
          color="white"
          bgColor="#122b45"
          code={require("raw-loader!../assets/serverSetup.ex")}
          ranges={[
            { loc: [0, 0], title: "На сервере" },
            { loc: [0, 17] },
            { loc: [18, 28] },
          ]}
        />
        <Slide
          bgColor="#111"
          notes="
            Чтобы получить данные от такого сервера, необходимо отправить ему запрос валидный запрос в формате GraphQL
            Все запросы отправляются методом POST, для того чтобы строку запроса и переменные можно было передавать в BODY

            Обычно запрос возвращает JSON полностью повторяющий форму запроса. Это офигенно удобно, а если неудобно представлен граф
            существуювуют всякие директивы и ключеные слова, которые позволяют делать алиасы для поле, спредить какие-то значения на уровень выше
            чтобы получился именно такой JSON который нам нужен.
          "
        >
          <Heading size={3} textColor="tertiary" margin="0 0 40px 0">
            На клиенте
          </Heading>
          <Layout>
            <Fill>
              <Text bold textColor="#e6e7e8" textSize="22px">
                Строка запроса на языке GraphQL
              </Text>
              <CodeSnippet
                code={require("raw-loader!../assets/simpleQuery.ex")}
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
                JSON ответ
              </Text>
              <CodeSnippet
                code={require("raw-loader!../assets/simpleResponse.ex")}
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
                top: '192px',
                width: '94%',
              }}
            />
          </Appear>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          notes="
            Для того чтобы эти строки отправлять с клиента, есть вот такой солидный список библиотек.
            Многие из них активно развиваются.

            Всего na три составляющих какие-то библиотеки на клиенте, про которые постоянно пишут статьи
            снимают туториалы и холиварят на реддите.
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
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
          notes="
            На самом деле библиотеки клиентов делают кучу полезных штук и напичканы логикой — вот основные из них.
            Полтора года назад прочитав весь этот список фич я обрадованни кинулся пробовать все это на тестовом сервере и получилось как всегда.
          "
        >
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
        <Slide
          notes="
            Тут не завелось, там упало, здесь я три дня читал все ишью чтобы найти в одном из них неприметный коммент мейнтейнера с ответом на вопрос.
            Сейчас дела стали лучше, но лучше бы знать заранее где подвох.
          "
        >
          <Image src={images.rake} />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Heading size={6} textColor="tertiary">
            Где лежат грабли?
          </Heading>
          <List>
            <Appear><ListItem>Описаниие графа данных</ListItem></Appear>
            <Appear><ListItem>Подключение клиента к приложению</ListItem></Appear>
            <Appear><ListItem>Организация кода</ListItem></Appear>
            <Appear><ListItem>Дебаг ошибок</ListItem></Appear>
          </List>
        </Slide>
        <Slide
          bgColor="#111"
          notes="
            Первое что нужно сделать как мы уже говорили — создать схемы для моделей данных.
            Здесь при проектировании АПИ возникает сильное желание по привычке сделать все как раньше в REST но используя graphql фреймворк.
            Посмотреть на UI и сделать по полю под каждую страницу.
            Или взять эндпоинты и пересадить их в граф под какими-то именами.

            Выход: работать только с данными как при проектировании DB.
            Важно отразить все связи между сущностями, чем точнее он отображает все связи,
            тем больше вероятность того, что разработчики на клиенте найдут данные, которые им нужны для их новой полу превьюшной фоточки не изменяя ничего на бекенде.
            Этот подход решает проблемы извевстные как overfetching and underfetching (N + 1 problem).
            Таким образом разработчики клиентов могут найти такие пути использования вашего графа, о которых вы изначально не задумывались.
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
          <Heading size={5} textColor="white">Фичи отдельно от данных</Heading>
          <CodeSnippet
            code={require("raw-loader!../assets/searchQuery.ex")}
            lang="graphql"
            codeStyle={{
              fontSize: 22,
              color: '#aeebff',
              fontWeight: 'bold',
            }}
          />
        </Slide>
        <Slide bgColor="black">
          <Heading size={5} textColor="white">Больше аргументов</Heading>
          <CodeSnippet
            code={require("raw-loader!../assets/arguments.ex")}
            lang="graphql"
            codeStyle={{
              fontSize: 22,
              color: '#aeebff',
              fontWeight: 'bold',
            }}
          />
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
            { loc: [0, 0], title: "Apollo Client setup" },
            { loc: [0, 3] },
            { loc: [4, 9] },
          ]}
        />
        <Slide bgColor="#111">
          <Heading size={5} textColor="#cbcbcb" margin="0 0 200px 80px">Этапы загрузки данных</Heading>
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
          <Heading size={5} textColor="#cbcbcb" margin="0 0 200px 80px">Этапы загрузки данных</Heading>
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
            <Appear>
              <ListItem textSize="40px">
                Graphiql
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px">
                Eslint-plugin-graphql
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px">
                Apollo-codegen
              </ListItem>
            </Appear>
          </List>
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
          notes="
            Persisted Queries
          "
        />
        <Slide>
          <Image src={images.cache}/>
        </Slide>
        <Slide>
          <Heading>MORE DATA</Heading>
          <CodeSnippet
            code={require("raw-loader!../assets/muatation.ex")}
            lang="graphql"
            codeStyle={{
              fontSize: 22,
              // color: '#aeebff',
              fontWeight: 'bold',
            }}
          />
        </Slide>
        <Slide bgColor="#111">
          <Heading fill size={3} textColor="tertiary">Cache consistency</Heading>
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
            <Appear>
              <ListItem textSize="35px">
                ❤️ GraphQL
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">Thanks!</Heading>
        </Slide>
      </Deck>
    );
  }
}
