#!/bin/bash

# Script to resolve merge conflicts by choosing the Farsi version
# This script will remove English versions and keep Farsi versions

echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.css" -o -name "*.md" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file line by line
    in_english_section=false
    in_farsi_section=false
    
    while IFS= read -r line; do
        if [[ "$line" == "<<<<<<< HEAD" ]]; then
            in_english_section=true
            in_farsi_section=false
            continue
        elif [[ "$line" == "=======" ]]; then
            in_english_section=false
            in_farsi_section=true
            continue
        elif [[ "$line" == ">>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid" ]]; then
            in_english_section=false
            in_farsi_section=false
            continue
        fi
        
        # Only keep lines that are not in the English section
        if [[ "$in_english_section" == false ]]; then
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace the original file with the processed version
    mv "$temp_file" "$file"
done

echo "Merge conflicts resolved!"
