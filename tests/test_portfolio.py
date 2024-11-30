import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

import os

@pytest.fixture(scope="module")
def setup_browser():
    # Configure Chrome options for headless execution
    options = Options()
    options.add_argument("--headless")  # Run in headless mode
    options.add_argument("--no-sandbox")  # Bypass OS security model
    options.add_argument("--disable-dev-shm-usage")  # Overcome limited resource problems
    options.add_argument("--window-size=1920,1080")  # Set window size

    # Initialize the Chrome WebDriver
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    driver.set_page_load_timeout(300)
    yield driver
    driver.quit()

def test_homepage_title(setup_browser):
    BASE_URL = os.getenv("BASE_URL", "http://localhost:5173")
    driver = setup_browser
    driver.get(BASE_URL)  # Replace with your live URL when deploying
    assert "ITU" in driver.title, f"Expected 'ITU' in title but got '{driver.title}'"
# def test_homepage_title(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")  # Assuming you're running the portfolio locally
#     assert "ITU" in driver.title

# def test_contact_form_submission(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173/contact")

#     # Locate the form inputs
#         # Wait for the form inputs to be present
#     name_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, 'your_name')))

#     # name_input = driver.find_element(By.NAME, 'your_name')
#     email_input = driver.find_element(By.NAME, 'your_email')
#     message_input = driver.find_element(By.NAME, 'message')
        
#     # Fill in the inputs with test data
#     name_input.send_keys("Test User")          # Filling in the name input
#     email_input.send_keys("testuser@example.com")  # Filling in the email input
#     message_input.send_keys("This is a test message.")  # Filling in the message textarea

#     # Submit the form
#     submit_button = driver.find_element(By.CSS_SELECTOR, ".submitBtn")
#     submit_button.click()

#     # Check for a success message or redirection as needed (modify accordingly)
#     WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Thank you')]")))  # Example of checking for success message
def test_contact_form_submission(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173/contact")

    # Wait for the form inputs to be present
    name_input = WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.NAME, 'your_name')))
    email_input = WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.NAME, 'your_email')))
    message_input = WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.NAME, 'message')))

    # Fill in the inputs with test data
    name_input.send_keys("Test User")
    email_input.send_keys("testuser@example.com")
    message_input.send_keys("This is a test message.")

    # Submit the form
    submit_button = WebDriverWait(driver, 100).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".submitBtn")))
    submit_button.click()

    # Check for a success message
    WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Thank you')]")))
def test_send_email_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    
    send_email_link = driver.find_element(By.XPATH, "//a[contains(@href, 'mailto:injifanotu@gmail.com.com')]")
    assert send_email_link is not None
    assert send_email_link.get_attribute("href") == "mailto:injifanotu@gmail.com.com"

def test_phone_number_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    
    phone_number_link = driver.find_element(By.XPATH, "//a[@href='tel:+251962408198']")
    assert phone_number_link is not None
    assert phone_number_link.get_attribute("href") == "tel:+251962408198"

def test_telegram_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    
    telegram_link = driver.find_element(By.XPATH, "//a[contains(@href, 't.me/InjifannooTU')]")
    assert telegram_link is not None
    assert telegram_link.get_attribute("href") == "https://t.me/InjifannooTU"

def test_linkedin_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")
    
    linkedin_link = driver.find_element(By.XPATH, "//a[contains(@href, 'linkedin.com/in/injifanotamiru')]")
    assert linkedin_link is not None
    assert linkedin_link.get_attribute("href") == "https://www.linkedin.com/in/injifanotamiru/"
def test_github_link(setup_browser):
    driver = setup_browser
    driver.get("http://localhost:5173")

    github_link = driver.find_element(By.XPATH, "//a[contains(@href, 'github.com/injifannoo')]")
    assert github_link is not None
    assert github_link.get_attribute("href") == "https://github.com/injifannoo/"

## Th following code also working.
# import pytest
# from selenium import webdriver
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.by import By

# @pytest.fixture(scope="module")
# def setup_browser():
#     # Initialize the Chrome WebDriver (assuming ChromeDriver is in PATH)
#     driver = webdriver.Chrome()
#     driver.maximize_window()
#     yield driver
#     driver.quit()

# def test_homepage_title(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")  # Assuming you're running the portfolio locally
#     assert "ITU" in driver.title

# def test_contact_form_submission(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173/contact")

#     # Locate the form inputs
#     name_input = driver.find_element(By.NAME, 'your_name')
#     email_input = driver.find_element(By.NAME, 'your_email')
#     message_input = driver.find_element(By.NAME, 'message')
    
#     # Fill in the inputs with test data
#     name_input.send_keys("Test User")          # Filling in the name input
#     email_input.send_keys("testuser@example.com")  # Filling in the email input
#     message_input.send_keys("This is a test message.")  # Filling in the message textarea

#     # Submit the form
#     submit_button = driver.find_element(By.CSS_SELECTOR, ".submitBtn")
#     submit_button.click()

# def test_phone_number_link(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")
#     phone_number_link = driver.find_element(By.XPATH, "//a[@href='tel:+251962408198']")
#     # phone_number_link = driver.find_element(By.XPATH, "//a[contains(text(), 'tel:+251962408198')]")
#     assert phone_number_link is not None
#     assert phone_number_link.get_attribute("href") == "tel:+251962408198"

# def test_github_link(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")
#     github_link = driver.find_element(By.XPATH, "//a[contains(@href, 'github.com/injifannoo')]")
#     assert github_link is not None
#     assert github_link.get_attribute("href") == "https://github.com/injifannoo/"
    
# def test_send_email_link(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")

#     # Corrected XPath
#     send_email_link = driver.find_element(By.XPATH, "//a[contains(@href, 'mailto:injifanotu@gmail.com.com')]")
#     assert send_email_link is not None
#     assert send_email_link.get_attribute("href") == "mailto:injifanotu@gmail.com.com"


# def test_telegram_link(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")
#     telegram_link = driver.find_element(By.XPATH, "//a[contains(@href, 't.me/InjifannooTU')]")
#     assert telegram_link is not None
#     assert telegram_link.get_attribute("href") == "https://t.me/InjifannooTU"

# def test_linkedin_link(setup_browser):
#     driver = setup_browser
#     driver.get("http://localhost:5173")
#     linkedin_link = driver.find_element(By.XPATH, "//a[contains(@href, 'linkedin.com/in/injifanotamiru')]")
#     assert linkedin_link is not None
#     assert linkedin_link.get_attribute("href") == "https://www.linkedin.com/in/injifanotamiru/"
