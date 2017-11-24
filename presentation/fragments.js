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

