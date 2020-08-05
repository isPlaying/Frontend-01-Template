var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "confirm",
        name: "hello",
        message: "Are you ok?"
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'), {
        title: this.answers.title
      },
    );
  }
};