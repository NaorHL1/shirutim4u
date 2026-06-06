"""
SEO Outreach Scraper
This script fetches a given URL and extracts any email addresses found on the page.

To run locally, you need to install the required dependencies:
pip install requests beautifulsoup4
"""

import re
import sys
import requests
from bs4 import BeautifulSoup

def extract_emails_from_url(url):
    """
    Fetches the content of a URL and extracts email addresses using regular expressions.
    """
    try:
        # Fetch the page content with a standard user-agent
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        # Parse HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Get raw text
        text_content = soup.get_text(separator=' ')
        
        # Regex pattern for email extraction
        email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        
        # Find emails in text
        found_emails = set(re.findall(email_pattern, text_content))
        
        # Find emails in mailto: links
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            if href.lower().startswith('mailto:'):
                email = href[7:].split('?')[0].strip()
                if re.match(email_pattern, email):
                    found_emails.add(email)
                    
        return list(found_emails)
        
    except requests.RequestException as e:
        print(f"Error fetching URL {url}: {e}")
        return []

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python seo_outreach.py <URL>")
    else:
        target_url = sys.argv[1]
        print(f"Scraping {target_url} for emails...\n")
        emails = extract_emails_from_url(target_url)
        
        if emails:
            print("Found the following email addresses:")
            for e in emails:
                print(f"- {e}")
        else:
            print("No email addresses found.")