const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data/templates.json', 'utf8'));

data.categories.CleanNest.sections.quoteBreadcrumb = {
  variants: {
    CleanNestQuoteBreadcrumb1: {
      title: 'Get a Quote',
      paths: [
        { label: 'Home', url: '/' },
        { label: 'Get a Quote' }
      ]
    }
  }
};

data.categories.CleanNest.sections.quote = {
  variants: {
    CleanNestQuote1: {
      subtitle: 'GET A QUOTE',
      title1: 'Get a Quote for',
      title2: 'Our Cleaning Services',
      description: "Tell us about your cleaning requirements and we'll provide you with a customized quote. It's quick, easy and completely free.",
      features: [
        {
          title: 'Tailored to Your Needs',
          description: 'Get a quote based on your specific cleaning requirements.'
        },
        {
          title: 'Quick & Easy',
          description: 'Fill out the form in just a few minutes.'
        },
        {
          title: 'No Obligation',
          description: 'Receive a personalized quote with no commitment.'
        }
      ],
      form: {
        title1: 'Request a',
        title2: 'Quote',
        description: 'Fill out the form below and our team will get back to you shortly with a customized quote.',
        buttonText: 'Submit Request ->',
        servicesList: [
          'Residential Cleaning',
          'Commercial Cleaning',
          'Post-Construction Cleaning',
          'Window Cleaning',
          'Carpet Cleaning',
          'Other'
        ]
      }
    }
  }
};

data.pages = data.pages || {};
data.pages.quote = {
  title: 'Get a Quote',
  path: '/quote',
  components: ['TopBar', 'MiddleBar', 'Header', 'quoteBreadcrumb', 'quote', 'Footer']
};

let header = data.categories.CleanNest.sections.Header.variants.CleanNestHeader1;
if(header.contactButton) {
  header.contactButton.url = '/quote';
}

fs.writeFileSync('data/templates.json', JSON.stringify(data, null, 2));
