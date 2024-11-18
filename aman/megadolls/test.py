import os

# Path to your Django project directory
PROJECT_DIR = './megadolls_ecommerce/web_app/templates/pages'

# Image URL or part of the URL to search for
IMAGE_URL = 'https://prod.megadolls.com/static/product/2022/09/09/MAIN_IMAGE.png'

def search_image_url_in_files(directory, search_text):
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Only look at certain file types, such as .html, .py, etc.
            if file.endswith(('.html', '.py', '.txt')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if search_text in content:
                            print(f'Found in {file_path}')
                except (UnicodeDecodeError, IOError) as e:
                    print(f'Could not read file {file_path}: {e}')

if __name__ == '__main__':
    search_image_url_in_files(PROJECT_DIR, IMAGE_URL)
