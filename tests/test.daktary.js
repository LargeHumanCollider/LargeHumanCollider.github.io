describe('Daktary', () =>
  describe('#GhUrl', () => {
    it('should create a GitHubUrl object', () => {
      const noValidGhUrl = new GithubUrl('#NotAnUrl')
      expect(noValidGhUrl).to.be.an('object')
    })
    it('should check a GitHubUrl with a invalid url', () => {
      const noValidGhUrl = new GithubUrl('#NotAnUrl')
      expect(noValidGhUrl.isValid).to.be(false)
    })
    it('should check a GitHubUrl with a valid url', () => {
      const validGhUrl = new GithubUrl(
        'daktary-team/contributions/blob/master/créer_un_depôt_github.md')
      expect(validGhUrl.isValid).to.be(true)
    })
    it('should load a ressource with a local url', (done) => {
      const localUrl = new GithubUrl('/tests/assets/contrib.html')
      localUrl.loadGhContrib(localUrl.ghUrl, (html) => {
        expect(html).to.be('<p>A contribution</p>\n')
        done()
      })
    })
  })
)
