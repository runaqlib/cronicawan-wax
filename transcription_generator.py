import csv
import os

# Path to your transcriptions.csv
csv_path = "_data/transcriptions.csv"  # <-- update if needed
output_dir = "_transcriptions"  # Where markdown files will go

# Create the folder if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Open the CSV and process each row
with open(csv_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        pid = row['pid']
        page = row['page']
        language = row['language']
        transcription = row['transcription'].replace("\\n", "\n")  # Restore line breaks

        # Safe filename: pid-page-language.md
        filename = f"{pid}-page{page}-{language}.md"
        filepath = os.path.join(output_dir, filename)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('---\n')
            f.write(f"pid: {pid}\n")
            f.write(f"page: {page}\n")
            f.write(f"language: {language}\n")
            f.write(f"layout: transcription\n")
            f.write(f"collection: transcriptions\n")
            f.write('transcription: |\n')
            for line in transcription.splitlines():
                f.write(f"  {line}\n")
            f.write('---\n\n')
            f.write('{{ page.transcription | markdownify }}\n')
